import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesHibridasTradicionaisPageRoutingModule } from './aplicacoes-hibridas-tradicionais-routing.module';

import { AplicacoesHibridasTradicionaisPage } from './aplicacoes-hibridas-tradicionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesHibridasTradicionaisPageRoutingModule
  ],
  declarations: [AplicacoesHibridasTradicionaisPage]
})
export class AplicacoesHibridasTradicionaisPageModule {}
