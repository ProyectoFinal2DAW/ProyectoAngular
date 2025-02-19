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
  @Input() descripcionExperimento: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  @Input() contadorExperimento: number = 0;
}
