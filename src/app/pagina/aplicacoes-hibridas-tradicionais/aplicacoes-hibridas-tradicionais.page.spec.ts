import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicacoesHibridasTradicionaisPage } from './aplicacoes-hibridas-tradicionais.page';

describe('AplicacoesHibridasTradicionaisPage', () => {
  let component: AplicacoesHibridasTradicionaisPage;
  let fixture: ComponentFixture<AplicacoesHibridasTradicionaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacoesHibridasTradicionaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacoesHibridasTradicionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
