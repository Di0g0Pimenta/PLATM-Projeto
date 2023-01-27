import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacoesWebPage } from './aplicacoes-web.page';

const routes: Routes = [
  {
    path: '',
    component: AplicacoesWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacoesWebPageRoutingModule {}
