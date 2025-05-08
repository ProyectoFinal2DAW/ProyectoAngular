import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCreateExamComponent } from './form-create-exam.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('FormCreateExamComponent', () => {
  let component: FormCreateExamComponent;
  let fixture: ComponentFixture<FormCreateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        FormCreateExamComponent,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            queryParams: of({ id_class: 1 })
          }
        }
      ]
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
