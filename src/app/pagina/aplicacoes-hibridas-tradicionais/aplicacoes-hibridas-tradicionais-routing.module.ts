import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacoesHibridasTradicionaisPage } from './aplicacoes-hibridas-tradicionais.page';

const routes: Routes = [
  {
    path: '',
    component: AplicacoesHibridasTradicionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacoesHibridasTradicionaisPageRoutingModule {}
