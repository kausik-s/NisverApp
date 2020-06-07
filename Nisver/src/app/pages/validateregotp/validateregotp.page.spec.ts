import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateregotpPage } from './validateregotp.page';

describe('ValidateregotpPage', () => {
  let component: ValidateregotpPage;
  let fixture: ComponentFixture<ValidateregotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateregotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateregotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
