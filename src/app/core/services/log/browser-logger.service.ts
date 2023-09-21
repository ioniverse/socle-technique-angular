import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILoggerService } from './logger';

@Injectable()
export class BrowserLoggerService implements ILoggerService {
  info(message: string, ...data: any[]): void {
    if (!environment.production) {
      console.info(message, data);
    } else {
      // TODO: PYO
    }
  }

  log(message: string, ...data: any[]): void {
    if (!environment.production) {
      console.log(message, data);
    } else {
      // TODO: PYO
    }
  }

  warn(message: string, ...data: any[]): void {
    if (!environment.production) {
      console.warn(message, data);
    } else {
      // TODO: PYO
    }
  }

  error(message: string, ...data: any[]): void {
    if (!environment.production) {
      console.error(message, data);
    } else {
      // TODO: PYO
    }
  }
}
