import { Injectable } from '@angular/core';

import { isTokenExpired } from '@shared/utils/jwt';
import { ConfigurationService } from '@core/services/configuration';
import { HttpService } from '@core/services/http';
import { LocalStorageService } from '@core/services/storage';
import { IUserLogin, IUserToken } from '@shared/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const AUTH_TOKEN_NAME = 'auth_token';

@Injectable()
export class AuthService {
  private _userToken?: string;

  constructor(
    private _http: HttpService,
    private _configService: ConfigurationService,
    private _ls: LocalStorageService
  ) {}

  public get authToken(): string | undefined {
    return (
      this._userToken || localStorage.getItem(AUTH_TOKEN_NAME) || undefined
    );
  }

  public set authToken(token: string | undefined) {
    if (token) {
      this._userToken = token;
      this._ls.setItem(AUTH_TOKEN_NAME, token || '');
    } else {
      this._userToken = undefined;
      this._ls.removeItem(AUTH_TOKEN_NAME);
    }
  }

  public get isAuthenticated(): boolean {
    return !!this.authToken && !isTokenExpired(this.authToken);
  }

  public login(userLogin: IUserLogin): Observable<IUserToken> {
    return this._http
      .post<IUserToken>(this._configService.apiUrl + '/login', userLogin)
      .pipe(tap((auth: IUserToken) => (this.authToken = auth?.token)));
  }

  public logout(): void {
    this.authToken = undefined;
  }
}
