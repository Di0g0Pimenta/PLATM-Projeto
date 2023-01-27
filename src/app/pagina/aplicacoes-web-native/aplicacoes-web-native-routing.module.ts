import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacoesWebNativePage } from './aplicacoes-web-native.page';

const routes: Routes = [
  {
    path: '',
    component: AplicacoesWebNativePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacoesWebNativePageRoutingModule {}
