import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserInfoService } from '@core/services/user';

export const permissionGuard: CanActivateFn = (route, state) => {
  const userHasPermission = inject(UserInfoService).hasAnyPermission(
    route.data['permission']
  );
  return userHasPermission ?? inject(Router).navigate(['/unauthorized']);
};
