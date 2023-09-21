import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserInfoService } from '@core/services/user';

export const roleGuard: CanActivateFn = (route, state) => {
  const userHasRole = inject(UserInfoService).hasAnyRole(route.data['roles']);
  return userHasRole ?? inject(Router).navigate(['/unauthorized']);
};
