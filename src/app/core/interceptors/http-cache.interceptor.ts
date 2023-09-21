import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpContextToken,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCacheService } from '@core/services/cache';
import { ILoggerService } from '@core/services/log';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export const CACHEABLE = new HttpContextToken(() => true);

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(
    private _logger: ILoggerService,
    private cacheService: HttpCacheService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // only cache requests configured to be cacheable
    if (!req.context.get(CACHEABLE)) {
      return next.handle(req);
    }

    if (req.method !== 'GET') {
      this._logger.log(`Invalidating cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(
      req.url
    );

    if (cachedResponse) {
      this._logger.log(
        `Returning a cached response for route : ${cachedResponse.url}`
      );
      this._logger.log(JSON.stringify(cachedResponse));
      return of(cachedResponse);
    }

    // send request to server and add response to cache
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this._logger.log(`Adding item to cache: ${req.url}`);
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
