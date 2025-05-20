import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Class } from '../../../../interfaces/class';
import { NewClass } from '../../../../interfaces/newClass';

import { postClasses } from '../../../DBManagement/DBManagement';

@Component({
  selector: 'app-cuadro-dialogo-add-class',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cuadro-dialogo-add-class.component.html',
  styleUrl: './cuadro-dialogo-add-class.component.css'
})
export class CuadroDialogoAddClassComponent {

  addClassForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addClassForm = this.fb.group({
      className: ['', Validators.required],
      classDescription: ['', Validators.required],
      classContent: [''],
      classImage: [''],
    });
  }


  onSubmit() {
    //console.log("OnSubmit");

    let apiPostResponse = null;

    if (this.addClassForm.invalid) {
      //console.log("Formulario inválido");
      alert("Compruebe los campos del formulario");
      return;
    }

    const newClass: NewClass = {
      nombre_clases: this.addClassForm.value.className,
      descripcion_clases: this.addClassForm.value.classDescription,
      contenido: this.addClassForm.value.classContent,
      foto_clases: "",
      video_clases: "",

    }

    apiPostResponse = postClasses(newClass);
 
    //console.log("ApiPostResponse: ", apiPostResponse);

    


  }

}
