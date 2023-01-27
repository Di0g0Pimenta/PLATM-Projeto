import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesWebPageRoutingModule } from './aplicacoes-web-routing.module';

import { AplicacoesWebPage } from './aplicacoes-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesWebPageRoutingModule
  ],
  declarations: [AplicacoesWebPage]
})
export class AplicacoesWebPageModule {}
