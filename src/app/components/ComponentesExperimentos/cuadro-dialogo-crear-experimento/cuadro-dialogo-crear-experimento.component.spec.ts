import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuadroDialogoCrearExperimentoComponent } from './cuadro-dialogo-crear-experimento.component';

describe('CuadroDialogoCrearExperimentoComponent', () => {
  let component: CuadroDialogoCrearExperimentoComponent;
  let fixture: ComponentFixture<CuadroDialogoCrearExperimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogoCrearExperimentoComponent, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoCrearExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
