import { Component, OnInit } from '@angular/core';
import {RegistrationAndAuthService} from '../registration-and-auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: RegistrationAndAuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    console.log(form.value);
    this.loginService.loginService(form.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    });

  }

}
