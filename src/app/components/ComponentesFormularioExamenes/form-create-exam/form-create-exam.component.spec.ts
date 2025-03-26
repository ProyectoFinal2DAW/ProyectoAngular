import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateExamComponent } from './form-create-exam.component';

describe('FormCreateExamComponent', () => {
  let component: FormCreateExamComponent;
  let fixture: ComponentFixture<FormCreateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
