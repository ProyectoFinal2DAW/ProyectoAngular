import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { LayoutVideoItemComponent } from "../layout-video-item/layout-video-item.component";

@Component({
  selector: 'app-video-experiments',
  imports: [MatListModule, LayoutVideoItemComponent],
  templateUrl: './video-experiments.component.html',
  styleUrl: './video-experiments.component.css'
})
export class VideoExperimentsComponent {

}
