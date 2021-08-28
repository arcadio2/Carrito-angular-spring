import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RopaComponent } from './shared/components/ropa/ropa.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ClotheRegisterComponent } from './shared/components/clothe-register/clothe-register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RopaComponent,
    HomeComponent,
    ClotheRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
