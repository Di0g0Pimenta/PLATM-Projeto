import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacoesWebProgressivasPage } from './aplicacoes-web-progressivas.page';

const routes: Routes = [
  {
    path: '',
    component: AplicacoesWebProgressivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacoesWebProgressivasPageRoutingModule {}
