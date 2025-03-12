import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Class } from '../../../interfaces/class';

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
      nombreClase: ['', Validators.required],
      descripcionClase: [''],
      contenidoClase: [''],
      imagenClase: [''],
    });
  }


  onSubmit() {
    console.log("OnSubmit");

    


  }

}
