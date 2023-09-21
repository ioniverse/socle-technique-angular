import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  showError(message?: string, title?: string): void {
    message = message || 'There was an error';
    title = title || 'Error';
    this._snackBar.open(message, title, { duration: 2000 });
    // this.toastr.error(message, title);
  }

  showSuccess(message?: string, title?: string) {
    message = message || '';
    title = title || 'Success';
    this._snackBar.open(message, title, { duration: 2000 });
    // this.toastr.success(message, title);
  }
}
