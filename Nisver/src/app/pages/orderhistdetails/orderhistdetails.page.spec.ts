import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderhistdetailsPage } from './orderhistdetails.page';

describe('OrderhistdetailsPage', () => {
  let component: OrderhistdetailsPage;
  let fixture: ComponentFixture<OrderhistdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderhistdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderhistdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
