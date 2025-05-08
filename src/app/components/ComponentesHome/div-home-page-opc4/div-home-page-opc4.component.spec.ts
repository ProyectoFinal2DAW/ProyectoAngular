import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHomePageOpc4Component } from './div-home-page-opc4.component';

describe('DivHomePageOpc4Component', () => {
  let component: DivHomePageOpc4Component;
  let fixture: ComponentFixture<DivHomePageOpc4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivHomePageOpc4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHomePageOpc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
