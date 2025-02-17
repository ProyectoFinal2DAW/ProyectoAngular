import { Component } from '@angular/core';
import { ItemVideoListClassContentComponent } from "../item-video-list-class-content/item-video-list-class-content.component";
import { LayoutListElementOfClassComponent } from "../layout-list-element-of-class/layout-list-element-of-class.component";

@Component({
  selector: 'app-container-class',
  imports: [ItemVideoListClassContentComponent, LayoutListElementOfClassComponent],
  templateUrl: './container-class.component.html',
  styleUrl: './container-class.component.css'
})
export class ContainerClassComponent {

  nombreClase: string = "Clase 1"


}
