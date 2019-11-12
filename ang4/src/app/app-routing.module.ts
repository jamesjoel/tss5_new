import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import { FatherComponent } from './father/father.component';


const routes: Routes = [
  {
    path: "childtoparent",
    component : FatherComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "demo",
    component : DemoComponent
  },
  {
    path : "products",
    component : ProductsComponent

  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "list",
    component : StudentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
