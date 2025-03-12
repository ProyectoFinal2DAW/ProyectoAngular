import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoAddClassComponent } from './cuadro-dialogo-add-class.component';

describe('CuadroDialogoAddClassComponent', () => {
  let component: CuadroDialogoAddClassComponent;
  let fixture: ComponentFixture<CuadroDialogoAddClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogoAddClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
