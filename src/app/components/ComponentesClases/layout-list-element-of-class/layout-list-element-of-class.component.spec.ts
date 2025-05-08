import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListElementOfClassComponent } from './layout-list-element-of-class.component';

describe('LayoutListElementOfClassComponent', () => {
  let component: LayoutListElementOfClassComponent;
  let fixture: ComponentFixture<LayoutListElementOfClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutListElementOfClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutListElementOfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
