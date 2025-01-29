import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHomePageComponent } from './div-home-page.component';

describe('DivHomePageComponent', () => {
  let component: DivHomePageComponent;
  let fixture: ComponentFixture<DivHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
