import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { StudentComponent } from './pages/student/student.component';


const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path:"user",
    component:UserComponent,
    canActivate:[BackdoorGuard]
  },
  {
    path:"student/:id",
    component:StudentComponent,
    canActivate:[BackdoorGuard]
  },
  {
    path:"fileupload",
    component:FileuploadComponent,
    canActivate:[BackdoorGuard]
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
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
