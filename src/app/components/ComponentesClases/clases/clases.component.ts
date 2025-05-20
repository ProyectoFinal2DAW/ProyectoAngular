import { Component, inject, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemClasroomComponent } from "../item-clasroom/item-clasroom.component";
import { Class } from '../../../../interfaces/class';
import { CuadroDialogoAddClassComponent } from "../cuadro-dialogo-add-class/cuadro-dialogo-add-class.component";
import { getClasses, getClassesByIdUser } from '../../../DBManagement/DBManagement';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogContentAddClass } from './CuadrosDeDialogo/AddUpdateClass/dialog-content-add-class';
import AOS from 'aos';

@Component({
  selector: 'app-clases',
  imports: [ItemClasroomComponent, RouterLink],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent implements AfterViewInit {

  ngAfterViewInit() {
      AOS.init({
        duration: 600,
        once: true,
      });
    }

  listClasses: Class[] = [];

  claseVacia: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: ""
  }

  teacherUser: boolean = false;

  id_usuario: number = 0;

  /* crearClaseVisible: Boolean = false;


  showPanelAddClass() {

    this.crearClaseVisible = !this.crearClaseVisible;
    //console.log("Show pop up add class");  

  } */
  async fetchData() {

    if (this.teacherUser) {
      this.listClasses = await getClasses();
    } else {
      this.listClasses = await getClassesByIdUser(this.id_usuario);
    }

    console.log("Lista de clases: ", this.listClasses);
  }

  async ngOnInit() {

    this.id_usuario = Number(sessionStorage.getItem("id_usuario"));



    let role = sessionStorage.getItem("jobTitle");
    if (role === "Alumne") {
      this.teacherUser = false;
    } else {
      this.teacherUser = true;
    }
    
    await this.fetchData();
  }




  //---------------------Cuadro de diálogo Add Class-------------------------------
  readonly dialogAddClass = inject(MatDialog);

  openDialogAddUpdateClass(action: string, clase: Class, idClase: number) {
    const dialogRefAddClass = this.dialogAddClass.open(DialogContentAddClass, {
      data: { action: action, clase: clase, idClase: idClase }
    });

    dialogRefAddClass.afterClosed().subscribe(async result => {
      console.log(`Dialog result: ${result}`);

      this.fetchData();
    });
  }
  //---------------------------------------------------------------------

}
