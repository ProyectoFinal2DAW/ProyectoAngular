import { Component, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { videoClass } from '../../../../../../interfaces/videoClass';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'dialog-content-show-video',
    templateUrl: 'dialog-content-show-video.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DialogContentShowVideo {

    video: videoClass;
  
    videoUrl?: SafeResourceUrl;
    
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: { video: videoClass }, private sanitizer: DomSanitizer) {
      this.video = data.video;
      console.log("Received video object: ", this.video);
    }
  
    ngOnInit() {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.videos_temario);
  
    }
  }