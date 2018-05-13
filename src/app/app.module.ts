import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RegistrationAndAuthService} from './registration-and-auth.service';
import {EventsService} from './events.service';
import {AuthenticationGuard} from './authentication.guard';
import {TokenInterceptorService} from './token-interceptor.service';

const routes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'events', component: EventsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'special', component: SpecialComponent, canActivate: [AuthenticationGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistrationAndAuthService, EventsService, AuthenticationGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
