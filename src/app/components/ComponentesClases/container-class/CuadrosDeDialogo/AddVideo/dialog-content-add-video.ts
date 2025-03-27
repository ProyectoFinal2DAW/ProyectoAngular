import { Component, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NewVideo } from '../../../../../../interfaces/newVideo';
import { postVideoClass } from '../../../../../DBManagement/DBManagement';


@Component({
    selector: 'dialog-content-add-video',
    templateUrl: 'dialog-content-add-video.html',
    imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DialogContentAddVideo {
  
    addVideoForm: FormGroup;
    
    id_clase: number = 0;
  
    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
      this.addVideoForm = this.fb.group({
        tituloVideo: ['', Validators.required],
        imagenVideo: ['', Validators.required],
        videoRuta: ['', Validators.required]
      });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.id_clase = params['id'];
        console.log("Id recibido: " + this.id_clase);
      });
    }
  
  
    async onSubmitCrearVideo() {
  
      if (this.addVideoForm.invalid) {
        console.log("Formulario inválido");
        alert("Compruebe los campos del formulario");
        return;
      }
  
      const newVideo: NewVideo = {
        titulo_video: this.addVideoForm.value.tituloVideo,
        foto_temario: this.addVideoForm.value.imagenVideo,
        videos_temario: this.addVideoForm.value.videoRuta
      }
  
      const response = await postVideoClass(this.id_clase, newVideo);
  
      console.log("Api response: ", response);
      
    }
    
  }