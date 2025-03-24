import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHomePageOpc2Component } from './div-home-page-opc2.component';

describe('DivHomePageOpc2Component', () => {
  let component: DivHomePageOpc2Component;
  let fixture: ComponentFixture<DivHomePageOpc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivHomePageOpc2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHomePageOpc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
