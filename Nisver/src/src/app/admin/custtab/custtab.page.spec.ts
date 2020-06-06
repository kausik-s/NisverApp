import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CusttabPage } from './custtab.page';

describe('CusttabPage', () => {
  let component: CusttabPage;
  let fixture: ComponentFixture<CusttabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusttabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CusttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
