import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { Class } from '../../../../interfaces/class';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentAddClass } from '../clases/CuadrosDeDialogo/AddUpdateClass/dialog-content-add-class';
import { deleteClassById } from '../../../DBManagement/DBManagement';
import { DialogContentDeleteClass } from '../clases/CuadrosDeDialogo/DeleteClass/dialog-content-delete-class';


@Component({
  selector: 'app-item-clasroom',
  imports: [],
  templateUrl: './item-clasroom.component.html',
  styleUrl: './item-clasroom.component.css'
})
export class ItemClasroomComponent {

  //TODO: Obtener este dato del session storage
  teacherUser: boolean = true;
  @Output() elementoEliminado = new EventEmitter<boolean>();

  @Input() classroom: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: "",
  };

  ngOnInit() {
    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
  }

  //---------------------Cuadro de diálogo Add video-------------------------------
  readonly dialogAddClass = inject(MatDialog);

  openDialogAddUpdateClass(action: string, clase: Class, idClase: number, event: any) {

    event.stopPropagation();

    const dialogRefAddClass = this.dialogAddClass.open(DialogContentAddClass, {
      data: { action: action, clase: clase, idClase: idClase }
    });

    dialogRefAddClass.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      this.elementoEliminado.emit(true);
    });
  }

  //------------------Cuadro de diálogo eliminar class-----------------
  readonly dialog = inject(MatDialog);

  async openDialogDeleteClass(idClass: number, event: any) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(DialogContentDeleteClass, {
      data: { idClass: this.classroom.id_clases } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      if (result) {
        //ejecutar la funcion para eliminar el elemento
        deleteClassById(idClass).then(() => {
          //console.log('Eliminación completada');
          // Aquí puedes actualizar la lista, mostrar un mensaje, etc.
          this.elementoEliminado.emit(true);

        });
      }
    });
  }
  //---------------------------------------------------------------------
}
