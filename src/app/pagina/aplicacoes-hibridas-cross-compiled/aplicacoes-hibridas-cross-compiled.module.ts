import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesHibridasCrossCompiledPageRoutingModule } from './aplicacoes-hibridas-cross-compiled-routing.module';

import { AplicacoesHibridasCrossCompiledPage } from './aplicacoes-hibridas-cross-compiled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesHibridasCrossCompiledPageRoutingModule
  ],
  declarations: [AplicacoesHibridasCrossCompiledPage]
})
export class AplicacoesHibridasCrossCompiledPageModule {}
