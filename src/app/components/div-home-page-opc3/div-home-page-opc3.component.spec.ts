import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHomePageOpc3Component } from './div-home-page-opc3.component';

describe('DivHomePageOpc3Component', () => {
  let component: DivHomePageOpc3Component;
  let fixture: ComponentFixture<DivHomePageOpc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivHomePageOpc3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHomePageOpc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
