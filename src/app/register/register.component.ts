import { Component, OnInit } from '@angular/core';
import {RegistrationAndAuthService} from '../registration-and-auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email: string;
  password: string;
  password2: string;

  constructor(private registration: RegistrationAndAuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    if(this.password2 === this.password) {
      this.registration.registrationService(form.value).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      });
      this.resetForm();
      this.router.navigate(['/special']);

    } else {
      return false;
    }

  }

  resetForm() {
    this.email = '';
    this.password = '';
    this.password2 = '';
  }

}
