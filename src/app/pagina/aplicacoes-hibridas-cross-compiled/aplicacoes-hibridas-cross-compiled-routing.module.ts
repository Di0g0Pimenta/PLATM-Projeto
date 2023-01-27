import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacoesHibridasCrossCompiledPage } from './aplicacoes-hibridas-cross-compiled.page';

const routes: Routes = [
  {
    path: '',
    component: AplicacoesHibridasCrossCompiledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacoesHibridasCrossCompiledPageRoutingModule {}
