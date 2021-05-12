import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidInformClienteComponent } from './modules/valid-inform-cliente/valid-inform-cliente.component';


const routes: Routes = [
  { path: 'busqueda-cliente',
  loadChildren: () => import('./modules/busqueda-cliente/busqueda-cliente.module').then(m => m.BusquedaClienteModule) },
  { path: 'valid-inform-cliente', component: ValidInformClienteComponent },
  {path: '**', redirectTo: '/trxns/busqueda-cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
