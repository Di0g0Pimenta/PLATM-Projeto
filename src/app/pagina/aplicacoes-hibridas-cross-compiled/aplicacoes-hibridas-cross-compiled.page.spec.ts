import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicacoesHibridasCrossCompiledPage } from './aplicacoes-hibridas-cross-compiled.page';

describe('AplicacoesHibridasCrossCompiledPage', () => {
  let component: AplicacoesHibridasCrossCompiledPage;
  let fixture: ComponentFixture<AplicacoesHibridasCrossCompiledPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacoesHibridasCrossCompiledPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacoesHibridasCrossCompiledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
