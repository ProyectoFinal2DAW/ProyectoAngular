import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Login2Component } from './login2.component';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('Login2Component', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Login2Component,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: of({})
            }
          }

        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
