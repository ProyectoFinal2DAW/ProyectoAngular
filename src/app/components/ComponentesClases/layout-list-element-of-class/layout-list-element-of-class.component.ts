import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { Temario } from '../../../../interfaces/temario';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentDeleteTemario } from '../container-class/CuadrosDeDialogo/DeleteTemario/dialog-content-delete-temario';
import { deleteTemarioById } from '../../../DBManagement/DBManagement';
import { DialogContentAddTemario } from '../container-class/CuadrosDeDialogo/AddTemario/dialog-content-add-temario';

@Component({
  selector: 'app-layout-list-element-of-class',
  imports: [],
  templateUrl: './layout-list-element-of-class.component.html',
  styleUrl: './layout-list-element-of-class.component.css'
})
export class LayoutListElementOfClassComponent {

  //TODO: Cambiar por el usuario logeado
  teacherUser: boolean = true;

  @Output() elementoEliminado = new EventEmitter<boolean>(); // Evento para notificar al padre


  @Input() temario: Temario = {
    id_temario: 0,
    id_clases: 0,
    nombre_temario: "",
    descrip_temario: "",
    contenido: "",
    foto_temario: "",
    videos_temario: "",
  }

  ngOnInit() {
    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
  }


  //-----------------Cuadro de diálogo Add/Update Temario----------------
    readonly dialogAddUpdateTemario = inject(MatDialog);
  
    openDialogAddUpdateTemario(action: string, temario: Temario, event: any) {

      event.stopPropagation();

      const dialogRefAddUpdateTemario = this.dialogAddUpdateTemario.open(DialogContentAddTemario, {
        data: {
          id_clase: 0,
          action: action,
          temario: temario
        }
      });
  
      dialogRefAddUpdateTemario.afterClosed().subscribe(result => {
        //console.log(`Dialog result: ${result}`);
      });
    }
  //------------------Cuadro de diálogo eliminar temario-----------------
  readonly dialog = inject(MatDialog);

  async openDialogDeleteTemario(idTemario: number, event: any) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(DialogContentDeleteTemario, {
      data: { idTemario: this.temario.id_temario } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      if (result) {
        //ejecutar la funcion para eliminar el elemento
        deleteTemarioById(idTemario).then(() => {
          //console.log('Eliminación completada');
          // Aquí puedes actualizar la lista, mostrar un mensaje, etc.
          this.elementoEliminado.emit(true);

        });
      }
    });
  }

}
