import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { MydirDirective } from './mydir.directive';
import { DemoComponent } from './demo/demo.component';
import { MiniDemoComponent } from './mini-demo/mini-demo.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { ProductsComponent } from './products/products.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FatherComponent } from './father/father.component';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentlistComponent,
    MydirDirective,
    DemoComponent,
    MiniDemoComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ProductsComponent,
    ProductBoxComponent,
    FatherComponent,
    KidsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
