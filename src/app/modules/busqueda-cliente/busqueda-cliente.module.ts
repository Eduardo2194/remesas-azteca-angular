import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { BusquedaClienteRoutingModule } from './busqueda-cliente-routing.module';
import { BusquedaClienteComponent } from './busqueda-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusquedaClienteComponent
  ],
  imports: [
    CommonModule,
    BusquedaClienteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BusquedaClienteModule { }
