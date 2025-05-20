import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { NewVideo } from '../../../../../../interfaces/newVideo';
import { MatSelectModule } from '@angular/material/select';
import { postVideoClass } from '../../../../../DBManagement/DBManagement';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'dialog-content-add-video',
    templateUrl: 'dialog-content-add-video.html',
    imports: [MatDialogModule, CommonModule, MatSelectModule ,MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DialogContentAddVideo {
  
    addVideoForm: FormGroup;
    
    id_clase: number = 0;

    nombresTemarios: { id: number, nombre: string}[] = [];
  
    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
      this.addVideoForm = this.fb.group({
        tituloVideo: ['', Validators.required],
        temarioVideo: ['', Validators.required],
        imagenVideo: ['', Validators.required],
        videoRuta: ['', Validators.required]
      });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.id_clase = params['id'];
        //console.log("Id recibido: " + this.id_clase);
      });
      
      const nombresGuardados = sessionStorage.getItem("nombresTemarios");
      if (nombresGuardados) {
        this.nombresTemarios = JSON.parse(nombresGuardados);
        //console.log("Nombres de temarios cargados: ", this.nombresTemarios);
      }
    }
  
  
    async onSubmitCrearVideo() {
  
      if (this.addVideoForm.invalid) {
        //console.log("Formulario inválido");
        alert("Compruebe los campos del formulario");
        return;
      }
  
      const newVideo: NewVideo = {
        titulo_video: this.addVideoForm.value.tituloVideo,
        temario_video: this.addVideoForm.value.temarioVideo,
        foto_temario: this.addVideoForm.value.imagenVideo,
        videos_temario: this.addVideoForm.value.videoRuta
      }
      //console.log(newVideo);
  
      const response = await postVideoClass(this.id_clase, newVideo);
  
      //console.log("Api response: ", response);
      
    }
    
  }