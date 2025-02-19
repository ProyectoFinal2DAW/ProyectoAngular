import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProfesoresHomePageComponent } from './layout-profesores-home-page.component';

describe('LayoutProfesoresHomePageComponent', () => {
  let component: LayoutProfesoresHomePageComponent;
  let fixture: ComponentFixture<LayoutProfesoresHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutProfesoresHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutProfesoresHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
