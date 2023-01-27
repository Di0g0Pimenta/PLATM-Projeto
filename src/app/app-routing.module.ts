import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'aplicacoes-nativas',
    loadChildren: () => import('./pagina/aplicacoes-nativas/aplicacoes-nativas.module').then( m => m.AplicacoesNativasPageModule)
  },
  {
    path: 'aplicacoes-hibridas-tradicionais',
    loadChildren: () => import('./pagina/aplicacoes-hibridas-tradicionais/aplicacoes-hibridas-tradicionais.module').then( m => m.AplicacoesHibridasTradicionaisPageModule)
  },
  {
    path: 'aplicacoes-hibridas-cross-compiled',
    loadChildren: () => import('./pagina/aplicacoes-hibridas-cross-compiled/aplicacoes-hibridas-cross-compiled.module').then( m => m.AplicacoesHibridasCrossCompiledPageModule)
  },
  {
    path: 'aplicacoes-web-native',
    loadChildren: () => import('./pagina/aplicacoes-web-native/aplicacoes-web-native.module').then( m => m.AplicacoesWebNativePageModule)
  },
  {
    path: 'aplicacoes-web',
    loadChildren: () => import('./pagina/aplicacoes-web/aplicacoes-web.module').then( m => m.AplicacoesWebPageModule)
  },
  {
    path: 'aplicacoes-web-progressivas',
    loadChildren: () => import('./pagina/aplicacoes-web-progressivas/aplicacoes-web-progressivas.module').then( m => m.AplicacoesWebProgressivasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
