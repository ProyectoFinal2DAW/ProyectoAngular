import { Component } from '@angular/core';
import { ItemVideoListClassContentComponent } from "../item-video-list-class-content/item-video-list-class-content.component";
import { LayoutListElementOfClassComponent } from "../layout-list-element-of-class/layout-list-element-of-class.component";
import { LayoutListExamsOfClassComponent } from '../layout-list-exams-of-class/layout-list-exams-of-class.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Class } from '../../../interfaces/class';
import { videoClass } from '../../../interfaces/videoClass';
import { Temario } from '../../../interfaces/temario';
import { CuestionarioInfoGeneral } from '../../../interfaces/cuestionarioInfoGeneral';

@Component({
  selector: 'app-container-class',
  imports: [ItemVideoListClassContentComponent, LayoutListElementOfClassComponent, LayoutListExamsOfClassComponent],
  templateUrl: './container-class.component.html',
  styleUrl: './container-class.component.css'
})
export class ContainerClassComponent {

  //listaTareas: ;
  id_clase: number = 0;

  class: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: "",
  }
  listaTemarios: Temario[] = [];
  listaVideos: videoClass[] = [];
  listaCuestionarios: CuestionarioInfoGeneral[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id'];
      console.log("Id recibido: " + this.id_clase);
    });

    this.fetchData();
  }

  async fetchData() {

    console.log("fetchData()");


    //Obtener datos de la clase
    try {

      let response = await fetch('http://localhost:8000/clases/' + this.id_clase);

      this.class = await response.json();
      console.log("Class data: ", this.class);

    } catch (error) {
      console.log("Error al obtener los datos de la clase: ", error);
    }

    //Obtener temas de la clase
    try {

      let response = await fetch('http://localhost:8000/temarios/clase/' + this.id_clase);

      this.listaTemarios = await response.json();
      console.log("Lista temarios: ", this.listaTemarios);

    } catch (error) {
      console.log("Error al obtener los temarios: ", error);
    }


    //Obtener videos de la clase
    try {

      let response = await fetch('http://localhost:8000/videos/' + this.id_clase);

      this.listaVideos = await response.json();
      console.log("Lista videos: ", this.listaVideos);

    } catch (error) {
      console.log("Error al obtener los videos: ", error);

    }

    //Obtener cuestionarios de la clase
    try {

      let response = await fetch('http://localhost:8000/cuestionarios/clase/' + this.id_clase);

      this.listaCuestionarios = await response.json();
      console.log("Lista cuestionarios: ", this.listaCuestionarios);

    } catch (error) {
      console.log("Error al obtener los cuestionarios: ", error);

    }


  }


}
