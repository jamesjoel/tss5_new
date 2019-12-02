import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
// import { AuthGuard } from './auth.guard';
import { UserguardGuard } from './guards/userguard.guard';



const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "user",
    canActivate : [UserguardGuard],
    component : UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
