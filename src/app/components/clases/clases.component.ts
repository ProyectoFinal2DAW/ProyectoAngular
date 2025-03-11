import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemClasroomComponent } from "../item-clasroom/item-clasroom.component";
import { Class } from '../../../interfaces/class';
import { CuadroDialogoCrearExperimentoComponent } from "../cuadro-dialogo-crear-experimento/cuadro-dialogo-crear-experimento.component";
import { CuadroDialogoStandardComponent } from "../cuadro-dialogo-standard/cuadro-dialogo-standard.component";
import { CuadroDialogoAddClassComponent } from "../cuadro-dialogo-add-class/cuadro-dialogo-add-class.component";

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

     /* if (this.crearClaseVisible) {
      this.crearClaseVisible = false;
    } else {
      this.crearClaseVisible = true;
    } */
    this.crearClaseVisible = !this.crearClaseVisible;
    console.log("Show pop up add class");

    

  }

  async fetchData() {

    console.log("fetchData()");

    let response = await fetch('http://localhost:8000/clases/');

    this.listClasses = await response.json();
    console.log("Lista temas: ", this.listClasses);
  }

  ngOnInit() {
    this.fetchData();
  }

  /* listClasses: Class[] = [
      { id_clases: 1, nombre_clases: "Clase", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 2, nombre_clases: "Clase 1", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 3, nombre_clases: "Clase 2", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 4, nombre_clases: "Clase 3", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 5, nombre_clases: "Clase 4", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 6, nombre_clases: "Clase 5", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 7, nombre_clases: "Clase 6", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
    ]; */

}
