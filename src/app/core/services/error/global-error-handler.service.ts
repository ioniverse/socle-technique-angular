import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from '@core/services/notification';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private _notificationService: NotificationService) {}

  handleError(error: any): void {
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection;
    }
    this._notificationService.showError(error);
  }
}
