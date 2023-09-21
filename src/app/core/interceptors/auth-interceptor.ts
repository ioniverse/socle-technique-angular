import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/authentification/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the request URL is for API
    if (req.url.includes('/v1/')) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.authToken}` || '',
          'Content-Type': 'application/json',
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
