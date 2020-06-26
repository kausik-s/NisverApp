import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingorderdetailPage } from './pendingorderdetail.page';

describe('PendingorderdetailPage', () => {
  let component: PendingorderdetailPage;
  let fixture: ComponentFixture<PendingorderdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingorderdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingorderdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
