import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoStandardComponent } from './cuadro-dialogo-standard.component';

describe('CuadroDialogoStandardComponent', () => {
  let component: CuadroDialogoStandardComponent;
  let fixture: ComponentFixture<CuadroDialogoStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogoStandardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
