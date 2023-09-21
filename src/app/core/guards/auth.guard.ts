import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/authentification';

export const authGuard: CanActivateFn = (route, state) => {
  return (
    inject(AuthService).isAuthenticated ??
    inject(Router).navigate(['/login'], {
      queryParams: { redirectUrl: state.url },
    })
  );
};
