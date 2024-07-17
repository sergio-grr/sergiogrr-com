import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { OtherComponent } from './components/other/other.component';


@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      Section1Component,
      AboutComponent,
      TecnologiasComponent,
      WorksComponent,
      ContactComponent,
      FooterComponent,
      OtherComponent,


   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
