import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderhistabPage } from './orderhistab.page';

describe('OrderhistabPage', () => {
  let component: OrderhistabPage;
  let fixture: ComponentFixture<OrderhistabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderhistabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderhistabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
