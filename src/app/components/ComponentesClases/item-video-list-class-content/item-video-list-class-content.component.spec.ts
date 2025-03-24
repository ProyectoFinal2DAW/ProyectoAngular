import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVideoListClassContentComponent } from './item-video-list-class-content.component';

describe('ItemVideoListClassContentComponent', () => {
  let component: ItemVideoListClassContentComponent;
  let fixture: ComponentFixture<ItemVideoListClassContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemVideoListClassContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemVideoListClassContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
