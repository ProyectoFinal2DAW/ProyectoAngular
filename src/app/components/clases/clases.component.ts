import { Component, Input } from '@angular/core';
import { ItemClasroomComponent } from "../item-clasroom/item-clasroom.component";
import { Class } from '../../../interfaces/class';
import { CuadroDialogoCrearExperimentoComponent } from "../cuadro-dialogo-crear-experimento/cuadro-dialogo-crear-experimento.component";
import { CuadroDialogoStandardComponent } from "../cuadro-dialogo-standard/cuadro-dialogo-standard.component";

@Component({
  selector: 'app-clases',
  imports: [ItemClasroomComponent],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {

  listClasses: Class[] = [
      { id_clases: 1, nombre_clases: "Clase", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 2, nombre_clases: "Clase 1", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 3, nombre_clases: "Clase 2", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 4, nombre_clases: "Clase 3", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 5, nombre_clases: "Clase 4", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 6, nombre_clases: "Clase 5", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
      { id_clases: 7, nombre_clases: "Clase 6", descripcion_clases: "descripción", contenido: "", foto_clases: "", video_clases: "" },
    ];

}
