import { Component, Input } from '@angular/core';
import { Tema } from '../../../interfaces/tema';

@Component({
  selector: 'app-item-tema',
  imports: [],
  templateUrl: './item-tema.component.html',
  styleUrl: './item-tema.component.css'
})
export class ItemTemaComponent {

  @Input() tema: Tema = {
    id_clases: 0,
    id_temario: 0,
    nombre_temario: "",
    descrip_temario: "",
    contenido: "",
    foto_temario: "",
    videos_temario: "",
  }

}
