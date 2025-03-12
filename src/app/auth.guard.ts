import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from './auth-service.service'; 
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

 export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot) => {
  const currentmenu = route.url[0].path;
  const router = inject(Router);
  const protectedRoutes: string[] = ['/login'];
   return protectedRoutes.includes(currentmenu);

  if(currentmenu == 'login')
  {
    alert('Login Successful!');
    return true;
  }
  else{
     alert('Acess Denied');
     router.navigate(['/logout']);
     return false;
  }
  
};  

/* export class authGuard implements CanActivateFn {
  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
} */


 /*  export class authGuard implements CanActivate{
    constructor(private authService: AuthServiceService, private router: Router) { }
    
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> |
                                   Promise<boolean | UrlTree> | boolean | UrlTree {
          if(this.authService.isAuthenticated()){
            return true;

      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

*/
