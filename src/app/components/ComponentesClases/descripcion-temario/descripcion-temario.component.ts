import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ContenidoTemarioDescripcion } from '../../../../interfaces/contenidoTemarioDescripcion';
import { getContenidoTemario } from '../../../DBManagement/DBManagement';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-descripcion-temario',
  imports: [],
  templateUrl: './descripcion-temario.component.html',
  styleUrl: './descripcion-temario.component.css'
})
export class DescripcionTemarioComponent {

  id_clase: number = 0;
  id_temario: number = 0;

  videoUrl?: SafeResourceUrl;


  contenidoClase: ContenidoTemarioDescripcion = {
    id_temario: 0,
    id_clases: 0,
    nombre_temario: "",
    descrip_temario: "",
    contenido: "",
    foto_temario: "",
    videos_temario: "",
  }

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  async ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id_class'];
      this.id_temario = params['id_temario'];
    });

    this.fetchData();
  }


  async fetchData() {

    this.contenidoClase = await getContenidoTemario(this.id_clase, this.id_temario);

    let url = this.contenidoClase.videos_temario;
    let urlBase = "https://www.youtube.com/embed/";
    let urlVideoId = url.split('?v=')[1]

    let urlEnbed = urlBase + urlVideoId; 
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlEnbed);

    //console.log("VideoURL: ", this.videoUrl);
    //console.log("contenido clase: ", this.contenidoClase);
  }



}
