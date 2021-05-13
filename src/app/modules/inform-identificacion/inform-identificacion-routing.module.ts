import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformIdentificacionComponent } from './inform-identificacion.component';

const routes: Routes = [
  { path: '',
    component: InformIdentificacionComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformIdentificacionRoutingModule { }
