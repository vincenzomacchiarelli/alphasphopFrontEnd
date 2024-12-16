import { inject, Injectable } from '@angular/core';
import { AuthappService } from './authapp.service';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private authService: AuthappService , private router: Router) { }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLogged()){
      return true;
    }else{
      console.log('Accesso non consentito!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean => {
  return inject(RouteGuardService).canActivate(next, state);
}
