import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExperimentoOpc1Component } from './layout-experimento-opc1.component';

describe('LayoutExperimentoOpc1Component', () => {
  let component: LayoutExperimentoOpc1Component;
  let fixture: ComponentFixture<LayoutExperimentoOpc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutExperimentoOpc1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutExperimentoOpc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
