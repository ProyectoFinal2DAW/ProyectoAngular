import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovacionComponent } from './innovacion.component';

describe('InnovacionComponent', () => {
  let component: InnovacionComponent;
  let fixture: ComponentFixture<InnovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
