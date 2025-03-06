import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentoDescriptionComponent } from './experimento-description.component';

describe('ExperimentoDescriptionComponent', () => {
  let component: ExperimentoDescriptionComponent;
  let fixture: ComponentFixture<ExperimentoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentoDescriptionComponent]
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
