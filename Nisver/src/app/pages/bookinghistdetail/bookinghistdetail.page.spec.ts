import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookinghistdetailPage } from './bookinghistdetail.page';

describe('BookinghistdetailPage', () => {
  let component: BookinghistdetailPage;
  let fixture: ComponentFixture<BookinghistdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinghistdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookinghistdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
