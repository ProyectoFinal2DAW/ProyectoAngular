import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-item-experiment',
  imports: [],
  templateUrl: './item-experiment.component.html',
  styleUrl: './item-experiment.component.css'
})
export class ItemExperimentComponent {
  @Input() nombreExperimento: string = "";
  @Input() imagenExperimento: string = "";
}
