import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoCrearTemarioComponent } from './cuadro-dialogo-crear-temario.component';

describe('CuadroDialogoCrearTemarioComponent', () => {
  let component: CuadroDialogoCrearTemarioComponent;
  let fixture: ComponentFixture<CuadroDialogoCrearTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogoCrearTemarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoCrearTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
