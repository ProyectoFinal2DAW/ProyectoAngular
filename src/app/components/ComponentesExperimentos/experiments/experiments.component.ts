import { Component, inject, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemExperimentComponent } from "../item-experiment/item-experiment.component";
import { Experiment } from '../../../../interfaces/experiment';
import { getExperiments } from '../../../DBManagement/DBManagement';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentAddExperiment } from '../CuadrosDeDialogo/AddExperimento/dialog-content-add-experiment';
import AOS from 'aos';

@Component({
  selector: 'app-experiments',
  imports: [ItemExperimentComponent, RouterLink],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent implements AfterViewInit {

  experimentoVacio: Experiment = {
    id_experimento: 0,
    nombre_experimento: "",
    descrip_experimento: "",
    foto_experimento: "",
    video_experimento: "",
    asignatura: ""
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 600,
      once: true,
    });
  }

  // Definir un array de experimentos con id, nombre e imagen
  listExperiments: Experiment[] = [];

  teacherUser: boolean = true;


  ngOnInit() {
    this.fetchData();

    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
  }

  async fetchData() {
    console.log("Fetching data...");
    this.listExperiments = await getExperiments();
  }


  readonly dialogAddVideo = inject(MatDialog);

  dialogAddExperiment() {
    const dialogRefAddExperiment = this.dialogAddVideo.open(DialogContentAddExperiment, {
      data: {
        id_clase: 0,
        action: 'a',
        experimento: this.experimentoVacio
      }
    });

    dialogRefAddExperiment.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);

      console.log("result, ", result);
      console.log("Se ha cerrado el diálogo de añadir experimento");

      this.fetchData();
    });
  }

  /* = [
    { id_experimento: 1, nombre_experimento: 'Experimento 1', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: ""},
    { id_experimento: 2, nombre_experimento: 'Experimento 2', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: "" },
    { id_experimento: 3, nombre_experimento: 'Experimento 3', descrip_experimento: "", foto_experimento: 'images/fondoLogin.jpg', video_experimento: "" }
  ]; */


}
