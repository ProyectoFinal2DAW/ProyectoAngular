import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemParticipanteClaseComponent } from './item-participante-clase.component';

describe('ItemParticipanteClaseComponent', () => {
  let component: ItemParticipanteClaseComponent;
  let fixture: ComponentFixture<ItemParticipanteClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemParticipanteClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemParticipanteClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
