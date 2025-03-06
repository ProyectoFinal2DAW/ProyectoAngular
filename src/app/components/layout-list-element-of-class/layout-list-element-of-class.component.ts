import { Component, Input } from '@angular/core';
import { Temario } from '../../../interfaces/temario';

@Component({
  selector: 'app-layout-list-element-of-class',
  imports: [],
  templateUrl: './layout-list-element-of-class.component.html',
  styleUrl: './layout-list-element-of-class.component.css'
})
export class LayoutListElementOfClassComponent {
  @Input() temario: Temario = {
    id_temario: 0,
    id_clases: 0,
    nombre_temario: "",
    descrip_temario: "", 
    contenido: "",
    foto_temario: "",
    videos_temario: "",
  }

}
