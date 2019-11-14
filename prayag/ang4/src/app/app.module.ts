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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { MessageComponent } from './message/message.component';
import { ProductComponent } from './product/product.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FatherComponent } from './father/father.component';
import { KidsComponent } from './kids/kids.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildViewBoxComponent } from './child-view-box/child-view-box.component';
import { My3Component } from './my3/my3.component';


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
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MessageComponent,
    ProductComponent,
    ProductBoxComponent,
    FatherComponent,
    KidsComponent,
    ChildViewComponent,
    ChildViewBoxComponent,
    My3Component
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
