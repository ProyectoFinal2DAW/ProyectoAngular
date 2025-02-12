import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxQuestionFormComponentComponent } from './box-question-form-component.component';

describe('BoxQuestionFormComponentComponent', () => {
  let component: BoxQuestionFormComponentComponent;
  let fixture: ComponentFixture<BoxQuestionFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxQuestionFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxQuestionFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
