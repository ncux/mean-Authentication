import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {RegistrationAndAuthService} from './registration-and-auth.service';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const registrationAndauthService = this.injector.get(RegistrationAndAuthService);
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${registrationAndauthService.fetchTokenFromLocalStorage()}`
      }
    });
    return next.handle(tokenizedRequest);

  }

}
