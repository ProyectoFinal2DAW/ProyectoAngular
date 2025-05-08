import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxQuestionFormComponentComponent } from './box-question-form-component.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BoxQuestionFormComponentComponent', () => {
  let component: BoxQuestionFormComponentComponent;
  let fixture: ComponentFixture<BoxQuestionFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxQuestionFormComponentComponent],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            queryParams: of({ id: 1, nombre: 'Test Cuestionario' }) 
          }
        }
      ]
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
