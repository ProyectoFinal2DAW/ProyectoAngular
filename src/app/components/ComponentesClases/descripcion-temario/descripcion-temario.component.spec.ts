import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionTemarioComponent } from './descripcion-temario.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DescripcionTemarioComponent', () => {
  let component: DescripcionTemarioComponent;
  let fixture: ComponentFixture<DescripcionTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionTemarioComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id_class: 1, id_temario: 2 })
          }
        }
      ]
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
