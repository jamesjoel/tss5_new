import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UplaodComponent } from './pages/uplaod/uplaod.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
// import { TokeninterceptorService } from './services/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UplaodComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokeninterceptorService,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
