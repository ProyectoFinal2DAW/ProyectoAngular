import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-clasroom',
  imports: [],
  templateUrl: './item-clasroom.component.html',
  styleUrl: './item-clasroom.component.css'
})
export class ItemClasroomComponent {
  @Input() nombre_clases: string = "";
  @Input() descripcion_clases: string = "";

}
