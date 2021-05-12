import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaClienteComponent } from './busqueda-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaClienteRoutingModule { }
