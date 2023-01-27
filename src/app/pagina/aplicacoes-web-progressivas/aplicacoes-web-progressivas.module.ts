import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesWebProgressivasPageRoutingModule } from './aplicacoes-web-progressivas-routing.module';

import { AplicacoesWebProgressivasPage } from './aplicacoes-web-progressivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesWebProgressivasPageRoutingModule
  ],
  declarations: [AplicacoesWebProgressivasPage]
})
export class AplicacoesWebProgressivasPageModule {}
