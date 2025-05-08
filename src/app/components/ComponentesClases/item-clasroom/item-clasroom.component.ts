import { Component, Input, inject } from '@angular/core';
import { Class } from '../../../../interfaces/class';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentAddClass } from '../clases/CuadrosDeDialogo/AddUpdateClass/dialog-content-add-class';


@Component({
  selector: 'app-item-clasroom',
  imports: [],
  templateUrl: './item-clasroom.component.html',
  styleUrl: './item-clasroom.component.css'
})
export class ItemClasroomComponent {

  //TODO: Obtener este dato del session storage
  usuarioProfesor: boolean = true;
  
  @Input() classroom: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: "",
  };

  //---------------------Cuadro de diálogo Add video-------------------------------
      readonly dialogAddClass = inject(MatDialog);
    
      openDialogAddUpdateClass(action: string, clase: Class, idClase: number, event: any) {

        event.stopPropagation();

        const dialogRefAddClass = this.dialogAddClass.open(DialogContentAddClass, {
          data: { action: action, clase: clase, idClase: idClase }
        });
    
        dialogRefAddClass.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
      //---------------------------------------------------------------------
}
