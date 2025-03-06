import { Component, Input } from '@angular/core';
import { Experiment } from '../../../interfaces/experiment';


@Component({
  selector: 'app-item-experiment',
  imports: [],
  templateUrl: './item-experiment.component.html',
  styleUrl: './item-experiment.component.css'
})
export class ItemExperimentComponent {
  @Input() experiment: Experiment = {
    id_experimento: 0,
    nombre_experimento: "",
    descrip_experimento: "",
    foto_experimento: "",
    video_experimento: "",
  };

  @Input() contadorExperimento: number = 0;
}
