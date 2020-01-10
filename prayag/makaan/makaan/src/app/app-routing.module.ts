import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { BuyComponent } from './pages/buy/buy.component';
import { SellComponent } from './pages/sell/sell.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"buy",
    component:BuyComponent
  },
  {
    path:"sell",
    component:SellComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"register/:id",
    component:RegisterComponent
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
