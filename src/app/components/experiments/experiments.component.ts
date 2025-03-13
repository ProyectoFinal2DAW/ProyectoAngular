import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemExperimentComponent } from "../item-experiment/item-experiment.component";
import { Experiment } from '../../../interfaces/experiment';
import { getExperiments } from '../../DBManagement/DBManagement';

@Component({
  selector: 'app-experiments',
  imports: [ItemExperimentComponent, RouterLink],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent {

  // Definir un array de experimentos con id, nombre e imagen
  listExperiments: Experiment[] = [];

  createExperimentVisible: Boolean = false;

  

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.listExperiments = await getExperiments();
  }

  showPanelAddExperiment() {
    this.createExperimentVisible = !this.createExperimentVisible;
  }


  /* = [
    { id_experimento: 1, nombre_experimento: 'Experimento 1', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: ""},
    { id_experimento: 2, nombre_experimento: 'Experimento 2', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: "" },
    { id_experimento: 3, nombre_experimento: 'Experimento 3', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: "" }
  ]; */


}
