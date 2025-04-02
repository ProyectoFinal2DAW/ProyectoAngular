import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ContainerClassComponent } from './container-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('ContainerClassComponent', () => {
  let component: ContainerClassComponent;
  let fixture: ComponentFixture<ContainerClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContainerClassComponent,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { queryParams: of({ id: 123 }) },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
