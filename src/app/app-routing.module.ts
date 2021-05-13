import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'busqueda-cliente',
  loadChildren: () => import('./modules/busqueda-cliente/busqueda-cliente.module').then(m => m.BusquedaClienteModule) },
  { path: 'valid-inform-cliente',
  loadChildren: () => import('./modules/valid-inform-cliente/valid-inform-cliente.module').then(m => m.ValidInformClienteModule) },
  { path: 'inform-transferencia',
  loadChildren: () => import('./modules/inform-transferencia/inform-transferencia.module').then(m => m.InformTransferenciaModule) },
  { path: 'inform-identificacion',
  loadChildren: () => import('./modules/inform-identificacion/inform-identificacion.module').then(m => m.InformIdentificacionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
