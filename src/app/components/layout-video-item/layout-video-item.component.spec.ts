import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVideoItemComponent } from './layout-video-item.component';

describe('LayoutVideoItemComponent', () => {
  let component: LayoutVideoItemComponent;
  let fixture: ComponentFixture<LayoutVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutVideoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
