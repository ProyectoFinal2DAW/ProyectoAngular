import { Component, Input } from '@angular/core';
import { Class } from '../../../../interfaces/class';

@Component({
  selector: 'app-item-clasroom',
  imports: [],
  templateUrl: './item-clasroom.component.html',
  styleUrl: './item-clasroom.component.css'
})
export class ItemClasroomComponent {
  @Input() classroom: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: "",
  };
}
