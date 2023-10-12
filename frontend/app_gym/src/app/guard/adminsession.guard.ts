import { CanActivateFn, Router  } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { inject } from '@angular/core';

export const adminsessionGuard: CanActivateFn = (route, state) => {

  const router : Router = inject(Router);
  const token = localStorage.getItem('token');
  const jwtHelper: JwtHelperService = inject (JwtHelperService);

  if(token){
    const decodedToken: any = jwtHelper.decodeToken(token);
    const role: string = decodedToken?.rol || '';
    if (role === "admin"){

      return true;
      }

    router.navigateByUrl('home')
    return false;
  }
  else{
    router.navigateByUrl('home')
    return false;
  }
  

};
