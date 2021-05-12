import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'busqueda-cliente',
  loadChildren: () => import('./modules/busqueda-cliente/busqueda-cliente.module').then(m => m.BusquedaClienteModule) },
  { path: 'valid-inform-cliente',
  loadChildren: () => import('./modules/valid-inform-cliente/valid-inform-cliente.module').then(m => m.ValidInformClienteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
