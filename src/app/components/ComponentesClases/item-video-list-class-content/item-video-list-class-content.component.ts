import { Component, Input } from '@angular/core';
import { videoClass } from '../../../../interfaces/videoClass';

@Component({
  selector: 'app-item-video-list-class-content',
  imports: [],
  templateUrl: './item-video-list-class-content.component.html',
  styleUrl: './item-video-list-class-content.component.css'
})
export class ItemVideoListClassContentComponent {

  @Input() video: videoClass = {
    foto_temario: "",
    titulo_video: "",
    videos_temario: "",
  }

}
