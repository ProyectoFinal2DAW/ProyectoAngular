import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemClasroomComponent } from "../item-clasroom/item-clasroom.component";
import { Class } from '../../../interfaces/class';
import { CuadroDialogoAddClassComponent } from "../cuadro-dialogo-add-class/cuadro-dialogo-add-class.component";
import { getClasses } from '../../DBManagement/DBManagement';

@Component({
  selector: 'app-clases',
  imports: [ItemClasroomComponent, RouterLink, CuadroDialogoAddClassComponent],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {

  listClasses: Class[] = [];

  crearClaseVisible: Boolean = false;


  showPanelAddClass() {

    this.crearClaseVisible = !this.crearClaseVisible;
    console.log("Show pop up add class");  

  }

  async ngOnInit() {
    this.listClasses = await getClasses();
  }

}
