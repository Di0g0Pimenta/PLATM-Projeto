import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesNativasPageRoutingModule } from './aplicacoes-nativas-routing.module';

import { AplicacoesNativasPage } from './aplicacoes-nativas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesNativasPageRoutingModule
  ],
  declarations: [AplicacoesNativasPage]
})
export class AplicacoesNativasPageModule {}
