import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExperimentComponent } from './item-experiment.component';

describe('ItemExperimentComponent', () => {
  let component: ItemExperimentComponent;
  let fixture: ComponentFixture<ItemExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemExperimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
