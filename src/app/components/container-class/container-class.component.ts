import { Component } from '@angular/core';
import { ItemVideoListClassContentComponent } from "../item-video-list-class-content/item-video-list-class-content.component";
import { LayoutListElementOfClassComponent } from "../layout-list-element-of-class/layout-list-element-of-class.component";
import { LayoutListExamsOfClassComponent } from '../layout-list-exams-of-class/layout-list-exams-of-class.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Class } from '../../../interfaces/class';
import { User } from '../../../interfaces/user';
import { videoClass } from '../../../interfaces/videoClass';
import { Temario } from '../../../interfaces/temario';
import { CuestionarioInfoGeneral } from '../../../interfaces/cuestionarioInfoGeneral';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemParticipanteClaseComponent } from "../item-participante-clase/item-participante-clase.component";
import { getClassById, getClassLessons, getClassParticipants, getTestsByClass, getVideosByClass } from '../../DBManagement/DBManagement';

@Component({
  selector: 'app-container-class',
  imports: [ItemVideoListClassContentComponent, LayoutListElementOfClassComponent, LayoutListExamsOfClassComponent, MatTabsModule, ItemParticipanteClaseComponent],
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

  listaParticipantesClase: User[] = [];

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

    this.class = await getClassById(this.id_clase);

    this.listaTemarios = await getClassLessons(this.id_clase);

    this.listaVideos = await getVideosByClass(this.id_clase);

    this.listaCuestionarios = await getTestsByClass(this.id_clase);

    this.listaParticipantesClase = await getClassParticipants(this.id_clase);
    
  }


}
