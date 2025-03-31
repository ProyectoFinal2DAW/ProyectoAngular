import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionTemarioComponent } from './descripcion-temario.component';

describe('DescripcionTemarioComponent', () => {
  let component: DescripcionTemarioComponent;
  let fixture: ComponentFixture<DescripcionTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionTemarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
