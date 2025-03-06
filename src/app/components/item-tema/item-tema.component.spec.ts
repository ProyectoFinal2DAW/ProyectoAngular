import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTemaComponent } from './item-tema.component';

describe('ItemTemaComponent', () => {
  let component: ItemTemaComponent;
  let fixture: ComponentFixture<ItemTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
