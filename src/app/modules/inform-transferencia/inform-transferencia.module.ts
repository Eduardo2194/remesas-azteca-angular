import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformTransferenciaRoutingModule } from './inform-transferencia-routing.module';
import { InformTransferenciaComponent } from './inform-transferencia.component';


@NgModule({
  declarations: [
    InformTransferenciaComponent
  ],
  imports: [
    CommonModule,
    InformTransferenciaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformTransferenciaModule { }
