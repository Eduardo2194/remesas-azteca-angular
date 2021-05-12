import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { ValidInformClienteComponent } from './valid-inform-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidInformClienteRoutingModule } from './valid-inform-cliente-routing.module';


@NgModule({
  declarations: [
    ValidInformClienteComponent
  ],
  imports: [
    CommonModule,
    ValidInformClienteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ValidInformClienteModule { }
