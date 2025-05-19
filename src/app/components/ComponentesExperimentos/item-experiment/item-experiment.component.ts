import { Component, Input } from '@angular/core';
import { Experiment } from '../../../../interfaces/experiment';


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
    asignatura: ""
  };

  teacherUser: boolean = true;

  ngOnInit() {
    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
    console.log("role: ", role);
  }

  @Input() contadorExperimento: number = 0;


  openDialogAddUpdateExperimento(action: string, experiment: Experiment, event: any) {
    
    event.stopPropagation();

    
  }

  openDialogDeleteExperimento(idExperiment: number, event: any) {

    event.stopPropagation();

  }

}
