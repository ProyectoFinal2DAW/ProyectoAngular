import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClasroomComponent } from './item-clasroom.component';

describe('ItemClasroomComponent', () => {
  let component: ItemClasroomComponent;
  let fixture: ComponentFixture<ItemClasroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemClasroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemClasroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
