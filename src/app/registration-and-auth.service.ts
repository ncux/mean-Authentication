import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class RegistrationAndAuthService {

  private loginURL = '/login';
  private registerURL = '/register';

  constructor(private http: HttpClient, private router: Router) { }

  registrationService(userData) {
    return this.http.post<any>(this.registerURL, userData);
  }

  loginService(userData) {
    return this.http.post<any>(this.loginURL, userData);
  }

  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }

  LoggedInTokenTrueOrFalse() {
    return !!localStorage.getItem('token');
  }

  fetchTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }

}
