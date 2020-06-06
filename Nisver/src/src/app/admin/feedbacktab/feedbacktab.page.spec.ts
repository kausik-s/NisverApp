import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbacktabPage } from './feedbacktab.page';

describe('FeedbacktabPage', () => {
  let component: FeedbacktabPage;
  let fixture: ComponentFixture<FeedbacktabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacktabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbacktabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
