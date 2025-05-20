import { Component, inject } from '@angular/core';
import { ItemResponseFormComponentComponent } from "../item-response-form-component/item-response-form-component.component";
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from '../../../../interfaces/question';
import { RouterLink, ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { getPreguntasCuestionario, postResultadosCuestionarios } from '../../../DBManagement/DBManagement';
import { ItemListaRespuestaUsuario } from '../../../../interfaces/itemListaRespuestaUsuario';
import { PostResultadoCuestionario } from '../../../../interfaces/postResultadoCuestionario';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentSendConfirm } from '../CuadrosDeDialogo/SendConfirm/dialog-content-send-confirm';
import { DialogContentShowResults } from '../CuadrosDeDialogo/ShowResults/dialog-content-show-results';


@Component({
  selector: 'app-box-question-form-component',
  imports: [ItemResponseFormComponentComponent, ReactiveFormsModule],
  templateUrl: './box-question-form-component.component.html',
  styleUrl: './box-question-form-component.component.css'
})

export class BoxQuestionFormComponentComponent {

  //TODO: Poner id del usuario iniciado login
  idUsuario = 0;
  //Number(localStorage.getItem('idUsuario'));

  id_clase: number = 0;
  id_questionario: number = 0;
  nombre_cuestionario: string = "";
  listQuestions: Question[] = [];

  listaRespuestasUsuario: ItemListaRespuestaUsuario[] = [];
  respuestaSeleccionada: { id: number, respuesta: string } | null = null;


  //Resultados test
  cantidadAciertos: number = 0;
  cantidadFallos: number = 0;

  formCuestionario: FormGroup;

  readonly dialog = inject(MatDialog);
  readonly dialogResults = inject(MatDialog);

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {

    this.formCuestionario = this.fb.group({

    });

  }




  ngOnInit() {

    this.idUsuario = Number(sessionStorage.getItem("id_usuario"));

    this.route.queryParams.subscribe(params => {
      this.id_questionario = params['id'];
      this.nombre_cuestionario = params['nombre'];
      this.id_clase = params['id_clase'];

      //console.log("Id recibido: " + this.id_questionario);
    });

    this.fetchData();
  }

  async fetchData() {
    //console.log("fetchData()");

    this.listQuestions = await getPreguntasCuestionario(this.id_questionario);

  }

  onSubmit() {
    //console.log("onSubmit()");


    this.openDialog();



  }

  buscarRespuesta(element: Question) {
    let i = 0;
    let encontrado = false;
    let posicionEncontrada = -1;

    let acierto = false;

    //console.log("ListaRespuestasUsuario: ", this.listaRespuestasUsuario);
    //console.log("element: ", element);

    while (!encontrado && i < this.listaRespuestasUsuario.length) {

      if (this.listaRespuestasUsuario[i].id == element.id_pregunta) {
        encontrado = true;
        posicionEncontrada = i;
        //console.log("Encontado: ", this.listaRespuestasUsuario[i].id, "    ", element.id_pregunta);
      }

      i++;
    }

    if (encontrado) {
      if (this.listaRespuestasUsuario[posicionEncontrada].respuesta == element.correcta) {
        acierto = true;
        //console.log("acierto: ", this.listaRespuestasUsuario[posicionEncontrada].respuesta);
        //console.log("correcta: ", element.correcta);
      }
    }

    return acierto;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentSendConfirm, {
      data: { mensaje: "¿Quieres enviar las respuestas?" } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);

      if (result) {
        for (let i = 0; i < this.listQuestions.length; i++) {
          const element = this.listQuestions[i];

          //Devuelve true si la respuesta es correcta o false si es incorrecta
          let respuesta = this.buscarRespuesta(element);
          //console.log("Respuesta: ", respuesta);

          if (respuesta) {
            this.cantidadAciertos++;
          } else {
            this.cantidadFallos++;
          }

        }

        let nota = (this.cantidadAciertos * 100) / this.listQuestions.length;

        nota = nota / 10;

        //console.log("idCuestionario: ", this.id_questionario);
        //console.log("Nota: ", nota.toFixed(2));
        //console.log("Cantidad aciertos: ", this.cantidadAciertos);
        //console.log("Cantidad fallos: ", this.cantidadFallos);

        const postResultadoCuestionario: PostResultadoCuestionario = {
          id_questionario: this.id_questionario,
          id_usuarios: this.idUsuario,
          nota: Number(nota.toFixed(2)),
          fecha_completado: new Date(),
          total_correctas: this.cantidadAciertos,
          total_falladas: this.cantidadFallos
        }

        const resultado = postResultadosCuestionarios(postResultadoCuestionario);
        //console.log("Resultado Api Resultado cuestionarios", resultado);


        this.openDialogShowResults(postResultadoCuestionario)

        //this.router.navigate(['/clase'], { queryParams: { id: this.id_clase } });
      }
    });
  }


  openDialogShowResults(resultado: PostResultadoCuestionario) {
    const dialogRef = this.dialogResults.open(DialogContentShowResults, {
      data: { resultado: resultado } // Pasar objeto por parámetros
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);

      this.router.navigate(['/clase'], { queryParams: { id: this.id_clase } });
    });
  }


  procesarRespuesta(evento: ItemListaRespuestaUsuario) {
    this.respuestaSeleccionada = evento;
    //console.log("Pregunta ID:", evento.id, "Respuesta:", evento.respuesta);

    let posicionEncontrada = this.buscarIdEnArray(evento);

    //console.log("Posicion encontrada: ", posicionEncontrada);

    if (posicionEncontrada === -1) {
      //console.log("Se añade a la lista, no existia");
      this.listaRespuestasUsuario.push(evento)
    } else {
      //console.log("Se modifica la respuesta ya guardada");
      this.listaRespuestasUsuario[posicionEncontrada].respuesta = evento.respuesta;
    }

    //console.log("Lista actualizada: ", this.listaRespuestasUsuario);

  }


  buscarIdEnArray(evento: ItemListaRespuestaUsuario): number {
    let i = 0;
    let encontrado = false;
    let valorReturn = -1;

    //console.log("ListaRespuestasUsuario: ", this.listaRespuestasUsuario);

    while (!encontrado && i < this.listaRespuestasUsuario.length) {

      if (this.listaRespuestasUsuario[i].id == evento.id) {
        encontrado = true;
        valorReturn = i;
      }

      i++;
    }

    return valorReturn;
  }




}
