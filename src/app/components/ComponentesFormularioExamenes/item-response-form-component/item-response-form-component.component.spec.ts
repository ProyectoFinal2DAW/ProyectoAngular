import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResponseFormComponentComponent } from './item-response-form-component.component';

describe('ItemResponseFormComponentComponent', () => {
  let component: ItemResponseFormComponentComponent;
  let fixture: ComponentFixture<ItemResponseFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemResponseFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemResponseFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
