import { Component } from '@angular/core';
import {RegistrationAndAuthService} from './registration-and-auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public registrationAndAuthService: RegistrationAndAuthService) {}
}
