import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerClassComponent } from './container-class.component';

describe('ContainerClassComponent', () => {
  let component: ContainerClassComponent;
  let fixture: ComponentFixture<ContainerClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerClassComponent]
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
