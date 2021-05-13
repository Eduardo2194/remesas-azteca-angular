import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformIdentificacionComponent} from './inform-identificacion.component';
import { InformIdentificacionRoutingModule } from './inform-identificacion-routing.module';


@NgModule({
  declarations: [
    InformIdentificacionComponent
  ],
  imports: [
    CommonModule,
    InformIdentificacionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformIdentificacionModule { }
