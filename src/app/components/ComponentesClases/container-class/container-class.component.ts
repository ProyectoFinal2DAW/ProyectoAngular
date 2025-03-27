import { Component, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import { ItemVideoListClassContentComponent } from "../item-video-list-class-content/item-video-list-class-content.component";
import { LayoutListElementOfClassComponent } from "../layout-list-element-of-class/layout-list-element-of-class.component";
import { LayoutListExamsOfClassComponent } from '../layout-list-exams-of-class/layout-list-exams-of-class.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Class } from '../../../../interfaces/class';
import { User } from '../../../../interfaces/user';
import { videoClass } from '../../../../interfaces/videoClass';
import { Temario } from '../../../../interfaces/temario';
import { CuestionarioInfoGeneral } from '../../../../interfaces/cuestionarioInfoGeneral';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemParticipanteClaseComponent } from "../item-participante-clase/item-participante-clase.component";
import { getClassById, getClassLessons, getClassParticipants, getNotasUsuarioClase, getTestsByClass, getVideosByClass, postVideoClass } from '../../../DBManagement/DBManagement';
import { Router } from 'express';
import { NotasUsuarioClase } from '../../../../interfaces/notasUsuarioClase';
import { CuadroDialogoCrearTemarioComponent } from "../cuadro-dialogo-crear-temario/cuadro-dialogo-crear-temario.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewVideo } from '../../../../interfaces/newVideo';
import { DialogContentAddVideo } from './CuadrosDeDialogo/AddVideo/dialog-content-add-video';
import { DialogContentShowVideo } from './CuadrosDeDialogo/ShowVideo/dialog-content-show-video';
import { DialogContentAddTemario } from './CuadrosDeDialogo/AddTemario/dialog-content-add-temario';

@Component({
  selector: 'app-container-class',
  imports: [ItemVideoListClassContentComponent, LayoutListElementOfClassComponent, LayoutListExamsOfClassComponent, MatTabsModule, ItemParticipanteClaseComponent, RouterLink, CuadroDialogoCrearTemarioComponent],
  templateUrl: './container-class.component.html',
  styleUrl: './container-class.component.css'
})
export class ContainerClassComponent {


  //TODO: Cambiar por el usuario logeado
  teacherUser: boolean = true;
  showAddTemario: boolean = false;

  //listaTareas: ;
  id_clase: number = 0;


  temarioVacio: Temario = {
    id_temario: 0,
    id_clases: 0,
    nombre_temario: "",
    descrip_temario: "",
    contenido: "",
    foto_temario: "",
    videos_temario: ""
  }

  datosClase: Class = {
    contenido: "",
    id_clases: 0,
    video_clases: "",
    descripcion_clases: "",
    foto_clases: "",
    nombre_clases: "",
  }
  listaTemarios: Temario[] = [];
  listaVideos: videoClass[] = [];
  listaCuestionarios: CuestionarioInfoGeneral[] = [];
  listaNotasUsuarioClase: NotasUsuarioClase[] = [];

  idUsuario = 1;
  //Number(localStorage.getItem('idUsuario'));

  listaParticipantesClase: User[] = [];
  listaDeParticipantesValida: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id'];
      console.log("Id recibido: " + this.id_clase);
    });

    this.fetchData();
  }

  async fetchData() {

    console.log("fetchData()");

    this.datosClase = await getClassById(this.id_clase);
    console.log("Datos clase: ", this.datosClase);

    this.listaTemarios = await getClassLessons(this.id_clase);

    this.listaVideos = await getVideosByClass(this.id_clase);

    console.log("Lista videos: ", this.listaVideos);

    this.listaCuestionarios = await getTestsByClass(this.id_clase);

    this.listaParticipantesClase = await getClassParticipants(this.id_clase);
    console.log("listaParticipantes: ", this.listaParticipantesClase);

    this.listaNotasUsuarioClase = await getNotasUsuarioClase(this.idUsuario, this.id_clase)
    console.log("Notas: ", this.listaNotasUsuarioClase);

  }

  async actualizarTemarios(evento: boolean) {

    console.log("Actualizar lista temarios");
    this.listaTemarios = await getClassLessons(this.id_clase);

    //TODO: se elimina correctamente pero no se refresca la lista

  }

  async actualizarCuestionarios(evento: boolean) {

    console.log("Actualizar lista cuestionarios")

    this.listaCuestionarios = await getTestsByClass(this.id_clase);

    //TODO: se elimina correctamente pero no se refresca la lista


  }

  //---------------------Cuadro de diálogo Mostrar video-------------------------------
  readonly dialog = inject(MatDialog);

  openDialog(video: videoClass) {
    const dialogRef = this.dialog.open(DialogContentShowVideo, {
      data: { video } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //---------------------------------------------------------------------
  //---------------------Cuadro de diálogo Add video-------------------------------
  readonly dialogAddVideo = inject(MatDialog);

  openDialogAddVideo() {
    const dialogRefAddVideo = this.dialogAddVideo.open(DialogContentAddVideo, {

    });

    dialogRefAddVideo.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //---------------------------------------------------------------------
  //-----------------Cuadro de diálogo Add/Update Temario----------------
  readonly dialogAddUpdateTemario = inject(MatDialog);

  openDialogAddUpdateTemario(action: string, temario: Temario) {
    const dialogRefAddUpdateTemario = this.dialogAddUpdateTemario.open(DialogContentAddTemario, {
      data: {
        action: action,
        temario: temario
      }
    });

    dialogRefAddUpdateTemario.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //---------------------------------------------------------------------

  /* addTemario() {

    console.log("addTemario()");

    this.showAddTemario = !this.showAddTemario;

  } */

  addExamen() {

    console.log("addExamen()");

  }



}




