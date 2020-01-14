import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { UplaodComponent } from './pages/uplaod/uplaod.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"upload",
    canActivate:[BackdoorGuard],
    component:UplaodComponent
  },
  {
    path:"user",
    canActivate:[BackdoorGuard],
    component:UserComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"*",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
