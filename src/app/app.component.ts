import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/inicio', icon: 'home' },
    { title: 'Aplicações Nativas', url: '/aplicacoes-nativas', icon: 'laptop' },
    { title: 'Aplicações Híbridas Tradicionais', url: '/aplicacoes-hibridas-tradicionais', icon: 'laptop' },
    { title: 'Aplicações Híbridas Cross-Compiled', url: '/aplicacoes-hibridas-cross-compiled', icon: 'laptop' },
    { title: 'Aplicações Web Native', url: '/aplicacoes-web-native', icon: 'laptop' },
    { title: 'Aplicações Web', url: '/aplicacoes-web', icon: 'laptop' },
    { title: 'Aplicações Web Progressivas', url: '/aplicacoes-web-progressivas', icon: 'laptop' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
