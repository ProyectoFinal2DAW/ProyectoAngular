import { Component } from '@angular/core';
import { ItemVideoListClassContentComponent } from "../item-video-list-class-content/item-video-list-class-content.component";
import { LayoutListElementOfClassComponent } from "../layout-list-element-of-class/layout-list-element-of-class.component";
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container-class',
  imports: [ItemVideoListClassContentComponent, LayoutListElementOfClassComponent, RouterLink],
  templateUrl: './container-class.component.html',
  styleUrl: './container-class.component.css'
})
export class ContainerClassComponent {

  //listaTareas: ;
  id_temario: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //this.id_clases = params['id'];
      //console.log("Id recibido: " + this.id_clases);
    });

    //this.fetchData();
  }


}
