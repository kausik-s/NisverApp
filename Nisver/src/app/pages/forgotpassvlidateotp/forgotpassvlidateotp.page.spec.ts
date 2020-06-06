import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotpassvlidateotpPage } from './forgotpassvlidateotp.page';

describe('ForgotpassvlidateotpPage', () => {
  let component: ForgotpassvlidateotpPage;
  let fixture: ComponentFixture<ForgotpassvlidateotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpassvlidateotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotpassvlidateotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
