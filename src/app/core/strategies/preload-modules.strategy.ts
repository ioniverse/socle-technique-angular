import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { ILoggerService } from '@core/services/log';
import { Observable, of } from 'rxjs';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {
  constructor(private _logger: ILoggerService) {}

  preload(route: Route, load: () => any): Observable<any> {
    if (route.data && route.data['preload']) {
      this._logger.log('Preloaded: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
