import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { Experiment } from '../../../../interfaces/experiment';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentAddExperiment } from '../CuadrosDeDialogo/AddExperimento/dialog-content-add-experiment';
import { DialogContentDeleteExperimento } from '../CuadrosDeDialogo/DeleteExperimento/dialog-content-delete-experimento';
import { deleteExperimentoById } from '../../../DBManagement/DBManagement';


@Component({
  selector: 'app-item-experiment',
  imports: [],
  templateUrl: './item-experiment.component.html',
  styleUrl: './item-experiment.component.css'
})
export class ItemExperimentComponent {

  @Output() elementoActualizado = new EventEmitter<boolean>(); // Evento para notificar al padre

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
    //console.log("role: ", role);
  }

  @Input() contadorExperimento: number = 0;


  //-----------------Cuadro de diálogo Add/Update Temario----------------
  readonly dialogAddUpdateTemario = inject(MatDialog);

  openDialogAddUpdateExperimento(action: string, experiment: Experiment, event: any) {

    event.stopPropagation();

    const dialogRefAddUpdateTemario = this.dialogAddUpdateTemario.open(DialogContentAddExperiment, {
      data: {
        id_clase: 0,
        action: action,
        experimento: experiment
      }
    });

    dialogRefAddUpdateTemario.afterClosed().subscribe(result => {
      ////console.log(`Dialog result: ${result}`);
      this.elementoActualizado.emit(true);
    });
  }

 //------------------Cuadro de diálogo eliminar temario-----------------
  readonly dialog = inject(MatDialog);

  async openDialogDeleteExperimento(idExperimento: number, event: any) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(DialogContentDeleteExperimento, {
      data: { idExperimento } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        //ejecutar la funcion para eliminar el elemento

        deleteExperimentoById(idExperimento).then(() => {


          this.elementoActualizado.emit(true);

        });
      }
    });
  }

}
