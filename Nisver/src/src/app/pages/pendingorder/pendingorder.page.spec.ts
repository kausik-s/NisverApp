import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingorderPage } from './pendingorder.page';

describe('PendingorderPage', () => {
  let component: PendingorderPage;
  let fixture: ComponentFixture<PendingorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
