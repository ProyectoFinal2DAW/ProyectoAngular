import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { CuestionarioInfoGeneral } from '../../../../interfaces/cuestionarioInfoGeneral';
import { DialogContentDeleteTemario } from '../container-class/CuadrosDeDialogo/DeleteTemario/dialog-content-delete-temario';
import { MatDialog } from '@angular/material/dialog';
import { deleteCuestionarioById } from '../../../DBManagement/DBManagement';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-layout-list-exams-of-class',
  imports: [DatePipe],
  templateUrl: './layout-list-exams-of-class.component.html',
  styleUrl: './layout-list-exams-of-class.component.css'
})
export class LayoutListExamsOfClassComponent {

  @Output() elementoEliminado = new EventEmitter<boolean>(); // Evento para notificar al padre


  //TODO: Cambiar por el usuario logeado
  teacherUser: boolean = true;

  @Input() cuestionario: CuestionarioInfoGeneral = {
    id_questionario: 0,
    nombre_cuestionario: "",
    fecha_publicacion: null
  }

  ngOnInit() {
    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
  }

  //-----------------Cuadro de diálogo eliminar cuestionario-----------------
  readonly dialog = inject(MatDialog);

  openDialogDeleteExam(id_questionario: number, event: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogContentDeleteTemario, {
      data: { id_questionario: this.cuestionario.id_questionario }
    });

    dialogRef.afterClosed().subscribe(result => {
      ////console.log(`Dialog result: ${result}`);
      if (result) {
        //ejecutar la funcion para eliminar el cuestionario
        deleteCuestionarioById(id_questionario).then(() => {
          ////console.log('Eliminación completada');
          // Aquí puedes actualizar la lista, mostrar un mensaje, etc.
          this.elementoEliminado.emit(true);

        });
      }
    });
  }

}
