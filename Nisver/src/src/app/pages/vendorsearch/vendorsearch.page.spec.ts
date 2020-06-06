import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorsearchPage } from './vendorsearch.page';

describe('VendorsearchPage', () => {
  let component: VendorsearchPage;
  let fixture: ComponentFixture<VendorsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
