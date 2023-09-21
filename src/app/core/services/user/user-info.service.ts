import { Injectable } from '@angular/core';
import { ConfigurationService } from '@core/services/configuration';
import { HttpService } from '@core/services/http';
import { PermissionEnum, RoleEnum } from '@shared/enums';
import { IUserInfo } from '@shared/models';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UserInfoService {
  private _user?: IUserInfo;

  public get user(): IUserInfo | undefined {
    return this._user;
  }

  public set user(value: IUserInfo | undefined) {
    this._user = value;
  }

  constructor(
    private _http: HttpService,
    private _configService: ConfigurationService
  ) {}

  public getUser(): Observable<IUserInfo> {
    return this._http
      .get<IUserInfo>(this._configService.apiUrl + '/me')
      .pipe(tap((data: IUserInfo) => (this.user = data)));
  }

  public hasRole(role: RoleEnum): boolean {
    return this._user?.role.id === role;
  }

  public hasAnyRole(roles: RoleEnum[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  public hasPermission(permission: PermissionEnum): boolean {
    return this._user?.permission.id === permission;
  }

  public hasAnyPermission(permissions: PermissionEnum[]): boolean {
    return permissions.some(permission => this.hasPermission(permission));
  }
}
