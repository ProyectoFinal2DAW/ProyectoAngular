import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListExamsOfClassComponent } from './layout-list-exams-of-class.component';

describe('LayoutListExamsOfClassComponent', () => {
  let component: LayoutListExamsOfClassComponent;
  let fixture: ComponentFixture<LayoutListExamsOfClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutListExamsOfClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutListExamsOfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
