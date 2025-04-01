import { ChangeDetectionStrategy, Component, signal, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NewPregunta } from '../../../../interfaces/newPregunta';
import { postCuestionario } from '../../../DBManagement/DBManagement';
import { NewCuestionario } from '../../../../interfaces/newCuestionario';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-create-exam',
  imports: [MatExpansionModule, MatOptionModule, MatSelectModule, CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
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

  nombresTemarios: { id: number, nombre: string }[] = [];

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
      temarioCuestionario: ['', Validators.required],
      descripcionCuestionario: ['', Validators.required],
      imagenCuestionario: [''],
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id_class'];
      console.log("Id recibido: " + this.id_clase);
    });

    const nombresGuardados = sessionStorage.getItem("nombresTemarios");
    if (nombresGuardados) {
      this.nombresTemarios = JSON.parse(nombresGuardados);
      console.log("Nombres de temarios cargados:" , this.nombresTemarios);
    }
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
    if (this.listaPreguntas.length === 0) {
      alert("No has insertado ninguna pregunta al cuestionario");
      return;
    }

    if (this.addCuestionarioform.invalid) {
      console.log("Formulario inválido");
      alert("Compruebe los campos del formulario");
      return;
    }

    // ✅ Obtener `id_temario` correctamente
    const id_temario = this.addCuestionarioform.value.temarioCuestionario;

    const cuestionarioForm: NewCuestionario = {
      nombre_cuestionario: this.addCuestionarioform.value.nombreCuestionario,
      temario_cuestionario: id_temario,
      descrip_cuestionario: this.addCuestionarioform.value.descripcionCuestionario,
      foto_cuestionario: this.addCuestionarioform.value.imagenCuestionario,
      video_cuestionario: ""
    };

    const response = await postCuestionario(cuestionarioForm, this.listaPreguntas, this.id_clase, id_temario);
    console.log("ApiResponse: ", response);

    if (response) {
      this.router.navigate(['/clases'], { queryParams: { id: this.id_clase } });
    } else {
      alert("No se ha podido guardar el cuestionario");
    }
  }



}
