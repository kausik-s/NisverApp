import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookinghistoryPage } from './bookinghistory.page';

describe('BookinghistoryPage', () => {
  let component: BookinghistoryPage;
  let fixture: ComponentFixture<BookinghistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinghistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookinghistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
