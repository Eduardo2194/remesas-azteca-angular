import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformTransferenciaComponent } from './inform-transferencia.component';

const routes: Routes = [
  {path: '',
  component: InformTransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformTransferenciaRoutingModule { }
