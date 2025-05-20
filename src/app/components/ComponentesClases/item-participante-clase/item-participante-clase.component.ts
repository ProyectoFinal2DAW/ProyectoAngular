import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { User } from '../../../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentDeleteParticipant } from '../container-class/CuadrosDeDialogo/DeleteParticipant/dialog-content-delete-participant';
import { deleteParticipantOfClass } from '../../../DBManagement/DBManagement';


@Component({
  selector: 'app-item-participante-clase',
  imports: [],
  templateUrl: './item-participante-clase.component.html',
  styleUrl: './item-participante-clase.component.css'
})
export class ItemParticipanteClaseComponent {

  teacherUser: boolean = true;
  @Output() participanteEliminado = new EventEmitter<boolean>();

  @Input() idClase: number = 0;
  @Input() participante: User = {
    id_usuarios: 0,
    id_roles: 0,
    usuario: "",
    email: "",
    estado: "",
    fecha_creacion: null,
    rol: {
      id_roles: 0,
      rol: "",
    },
    profileImage: "",
  }

  ngOnInit() {
    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
  }


  //------------------Cuadro de diálogo eliminar usuario de una clase-----------------
    readonly dialog = inject(MatDialog);
  
    async openDialogDeleteUserClass(idUser: number) {
  
      console.log("openDialogDeleteUserClass");
  
      const dialogRef = this.dialog.open(DialogContentDeleteParticipant, {
        data: { idUser: idUser } // Pasar objeto por parámetros
      });
  
      dialogRef.afterClosed().subscribe(result => {
        //console.log(`Dialog result: ${result}`);
        if (result) {
          //ejecutar la funcion para eliminar el elemento
          deleteParticipantOfClass(idUser, this.idClase).then(() => {
            // Aquí puedes actualizar la lista, mostrar un mensaje, etc.
            this.participanteEliminado.emit(true);
  
          });
        }
      });
    }

}
