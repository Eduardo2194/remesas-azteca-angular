import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaClienteModule } from './modules/busqueda-cliente/busqueda-cliente.module';
import { ValidInformClienteModule } from './modules/valid-inform-cliente/valid-inform-cliente.module';
import { InformTransferenciaModule } from './modules/inform-transferencia/inform-transferencia.module';
import { InformIdentificacionModule } from './modules/inform-identificacion/inform-identificacion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BusquedaClienteModule,
    ValidInformClienteModule,
    InformTransferenciaModule,
    InformIdentificacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
