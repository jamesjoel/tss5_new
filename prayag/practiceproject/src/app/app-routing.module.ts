import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BackdoorGuard } from './guards/backdoor.guard';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"student",
    canActivate:[BackdoorGuard],
    component:StudentComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
