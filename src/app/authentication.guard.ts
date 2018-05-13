import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {RegistrationAndAuthService} from './registration-and-auth.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private registration: RegistrationAndAuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.registration.LoggedInTokenTrueOrFalse()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }



}
