import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidInformClienteComponent } from './modules/valid-inform-cliente/valid-inform-cliente.component';
import { BusquedaClienteModule } from './modules/busqueda-cliente/busqueda-cliente.module';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ValidInformClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BusquedaClienteModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
