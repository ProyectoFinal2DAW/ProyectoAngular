import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperimentoDescriptionComponent } from './experimento-description.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


describe('ExperimentoDescriptionComponent', () => {
  let component: ExperimentoDescriptionComponent;
  let fixture: ComponentFixture<ExperimentoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentoDescriptionComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: 1 })
          }
        },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustResourceUrl: (url: string) => url
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExperimentoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
