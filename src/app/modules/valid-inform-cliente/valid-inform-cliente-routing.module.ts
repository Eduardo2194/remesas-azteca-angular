import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidInformClienteComponent} from './valid-inform-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ValidInformClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidInformClienteRoutingModule { }
