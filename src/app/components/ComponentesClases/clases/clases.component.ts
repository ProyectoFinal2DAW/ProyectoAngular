import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemClasroomComponent } from "../item-clasroom/item-clasroom.component";
import { Class } from '../../../../interfaces/class';
import { CuadroDialogoAddClassComponent } from "../cuadro-dialogo-add-class/cuadro-dialogo-add-class.component";
import { getClasses } from '../../../DBManagement/DBManagement';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogContentAddClass } from './CuadrosDeDialogo/AddClass/dialog-content-add-class';


@Component({
  selector: 'app-clases',
  imports: [ItemClasroomComponent, RouterLink, CuadroDialogoAddClassComponent],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {

  listClasses: Class[] = [];

  /* crearClaseVisible: Boolean = false;


  showPanelAddClass() {

    this.crearClaseVisible = !this.crearClaseVisible;
    console.log("Show pop up add class");  

  } */

  async ngOnInit() {
    this.listClasses = await getClasses();
  }


    //---------------------Cuadro de diálogo Add video-------------------------------
    readonly dialogAddClass = inject(MatDialog);
  
    openDialogAddClass() {
      const dialogRefAddClass = this.dialogAddClass.open(DialogContentAddClass, {
  
      });
  
      dialogRefAddClass.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    //---------------------------------------------------------------------

}
