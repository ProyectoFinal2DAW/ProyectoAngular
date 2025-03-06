import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorTemasComponent } from './contenedor-temas.component';

describe('ContenedorTemasComponent', () => {
  let component: ContenedorTemasComponent;
  let fixture: ComponentFixture<ContenedorTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorTemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
