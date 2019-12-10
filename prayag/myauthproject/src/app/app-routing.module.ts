import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
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
    path:"profile",
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
