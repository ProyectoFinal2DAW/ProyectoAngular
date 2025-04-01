import { ChangeDetectionStrategy, Component, signal, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NewPregunta } from '../../../../interfaces/newPregunta';
import { postCuestionario } from '../../../DBManagement/DBManagement';
import { NewCuestionario } from '../../../../interfaces/newCuestionario';


@Component({
  selector: 'app-form-create-exam',
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-create-exam.component.html',
  styleUrl: './form-create-exam.component.css'
})
export class FormCreateExamComponent {

  readonly panelOpenState = signal(false);

  //Formulario crear pregunta
  addPreguntaForm: FormGroup;

  addCuestionarioform: FormGroup;

  listaPreguntas: NewPregunta[] = [];

  id_clase: number = 0;

  id_temario: number = 0;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {

    this.addPreguntaForm = this.fb.group({
      enunciado: ['', Validators.required],
      respuesta1: ['', Validators.required],
      respuesta2: ['', Validators.required],
      respuesta3: ['', Validators.required],
      respuestaCorrecta: ['', Validators.required]
    });

    this.addCuestionarioform = this.fb.group({
      nombreCuestionario: ['', Validators.required],
      descripcionCuestionario: ['', Validators.required],
      imagenCuestionario: [''],
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id_class'];
      console.log("Id recibido: " + this.id_clase);
    });
  }






  onSubmitCrearPregunta() {

    if (this.addPreguntaForm.invalid) {
      console.log("Formulario inválido");
      alert("Compruebe los campos del formulario");
      return;
    }

    const preguntaForm: NewPregunta = {
      id_questionario: 0,
      enunciado: this.addPreguntaForm.value.enunciado,
      respuesta: "",
      correcta: this.addPreguntaForm.value.respuestaCorrecta,
      respuesta1: this.addPreguntaForm.value.respuesta1,
      respuesta2: this.addPreguntaForm.value.respuesta2,
      respuesta3: this.addPreguntaForm.value.respuesta3
    }

    this.listaPreguntas.push(preguntaForm);

    //Vaciar todos los campos de texto del formulario
    this.addPreguntaForm.reset();
  }

  async onSubmitCrearCuestionario() {



    if (this.listaPreguntas.length > 0) {

      if (this.addCuestionarioform.invalid) {
        console.log("Formulario inválido");
        alert("Compruebe los campos del formulario");
        return;
      }

      const cuestionarioForm: NewCuestionario = {
        nombre_cuestionario: this.addCuestionarioform.value.nombreCuestionario,
        descrip_cuestionario: this.addCuestionarioform.value.descripcionCuestionario,
        foto_cuestionario: this.addCuestionarioform.value.imagenCuestionario,
        video_cuestionario: ""
      }

      const response = await postCuestionario(cuestionarioForm, this.listaPreguntas, this.id_clase, this.id_temario);

      console.log("ApiResponse: ", response);

      if (response) {
        this.router.navigate(['/clases'], { queryParams: { id: this.id_clase } });
      } else {
        alert("No se ha podido guardar el cuestionario");
      }

    } else {
      alert("No has insertado ninguna pregunta al cuestionario");
    }

  }



}
