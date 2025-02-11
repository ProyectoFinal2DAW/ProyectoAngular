import { Component } from '@angular/core';
import { ItemExperimentComponent } from "../item-experiment/item-experiment.component";
import { Experiment } from '../../../interfaces/experiment';

@Component({
  selector: 'app-experiments',
  imports: [ItemExperimentComponent],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent {

    // Definir un array de experimentos con id, nombre e imagen
    listExperiments: Experiment[] = [
      { id: 1, nombre: 'Experimento 1', imagen: 'images/fondoLogin.jpg' },
      { id: 2, nombre: 'Experimento 2', imagen: 'images/fondoLogin.jpg' },
      { id: 3, nombre: 'Experimento 3', imagen: 'images/fondoLogin.jpg' }
    ];
  

}
