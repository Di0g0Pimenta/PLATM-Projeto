import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacoesWebNativePageRoutingModule } from './aplicacoes-web-native-routing.module';

import { AplicacoesWebNativePage } from './aplicacoes-web-native.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacoesWebNativePageRoutingModule
  ],
  declarations: [AplicacoesWebNativePage]
})
export class AplicacoesWebNativePageModule {}
