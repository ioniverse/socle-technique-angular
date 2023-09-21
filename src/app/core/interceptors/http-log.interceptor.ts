import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoggerService } from '@core/services/log';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLogInterceptor implements HttpInterceptor {
  constructor(private _logger: ILoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._logger.log(`HttpLogInterceptor - ${req.url}`);

    return next.handle(req).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          this._logger.log(event.body);
        }
      })
    );
  }
}
