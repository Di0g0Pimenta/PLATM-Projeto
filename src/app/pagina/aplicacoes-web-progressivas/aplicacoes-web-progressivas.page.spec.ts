import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicacoesWebProgressivasPage } from './aplicacoes-web-progressivas.page';

describe('AplicacoesWebProgressivasPage', () => {
  let component: AplicacoesWebProgressivasPage;
  let fixture: ComponentFixture<AplicacoesWebProgressivasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacoesWebProgressivasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacoesWebProgressivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
