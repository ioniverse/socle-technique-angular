import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {
  AuthInterceptor,
  HttpErrorInterceptor,
  HttpLogInterceptor,
} from '@core/interceptors';
import { AuthService } from '@core/services/authentification';
import { HttpCacheService } from '@core/services/cache';
import { GlobalErrorHandlerService } from '@core/services/error';
import { HttpService } from '@core/services/http';
import { BrowserLoggerService, ILoggerService } from '@core/services/log';
import { NotificationService } from '@core/services/notification';
import { LocalStorageService } from '@core/services/storage';
import { UserInfoService } from '@core/services/user';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [
    UserInfoService,
    NotificationService,
    HttpService,
    { provide: ILoggerService, useClass: BrowserLoggerService },
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLogInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    HttpCacheService,
    LocalStorageService,
  ],
})
export class CoreModule {}
