import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsernameComponent } from './sharedcomponent/username/username.component';
import { PasswordComponent } from './sharedcomponent/password/password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsernameComponent,
    PasswordComponent,
    SignupComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
