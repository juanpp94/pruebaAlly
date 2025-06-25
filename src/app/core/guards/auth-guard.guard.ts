import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogin = localStorage.getItem('isLogin');

  if (isLogin === 'yes') {
    return true;
  } else {
    router.navigateByUrl('/auth/login');
    return false;
  }
};
