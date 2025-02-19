import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExperimentoOpc2Component } from './layout-experimento-opc2.component';

describe('LayoutExperimentoOpc2Component', () => {
  let component: LayoutExperimentoOpc2Component;
  let fixture: ComponentFixture<LayoutExperimentoOpc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutExperimentoOpc2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutExperimentoOpc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
