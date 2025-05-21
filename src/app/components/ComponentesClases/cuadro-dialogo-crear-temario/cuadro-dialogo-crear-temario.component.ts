import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Class } from '../../../../interfaces/class';
import { NewTemario } from '../../../../interfaces/newTemario';
import { postTemario } from '../../../DBManagement/DBManagement';

@Component({
  selector: 'app-cuadro-dialogo-crear-temario',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cuadro-dialogo-crear-temario.component.html',
  styleUrl: './cuadro-dialogo-crear-temario.component.css'
})
export class CuadroDialogoCrearTemarioComponent {

  @Input() datosClase: Class = {
      contenido: "",
      id_clases: 0,
      video_clases: "",
      descripcion_clases: "",
      foto_clases: "",
      nombre_clases: "",
  }

  addTemarioForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.addTemarioForm = this.fb.group({
      idClases: ['', Validators.required],
      nombreTemario: ['', Validators.required],
      descripcionTemario: [''],
      contenidoTemario: [''],
      videoTemario: [''],
      imagenTemario: ['']
    });
  }

  async onSubmitCrearTemario() {

    ////console.log("OnSubmitCrearTemario()");

    if (this.addTemarioForm.invalid) {
      ////console.log("Formulario inválido");
      alert("Compruebe los campos del formulario");
      return;
    }

    const newTemario: NewTemario = {
      id_clases: this.addTemarioForm.value.idClases,
      nombre_temario: this.addTemarioForm.value.nombreTemario,
      descrip_temario: this.addTemarioForm.value.descripcionTemario,
      contenido: this.addTemarioForm.value.contenidoTemario,
      foto_temario: this.addTemarioForm.value.imagenTemario,
      videos_temario: this.addTemarioForm.value.videoTemario
    }


    let response = await postTemario(newTemario);

    ////console.log("Api response: ", response);

  }

}
