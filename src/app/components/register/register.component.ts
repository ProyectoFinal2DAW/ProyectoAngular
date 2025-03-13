import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  textFormControl = new FormControl('', [Validators.required, Validators.email]);
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      textFormControl: ['', [Validators.required, Validators.email]],
      textViewApellido: ['', [Validators.required]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      textViewContrasenya: ['', [Validators.required]]
    })
  }

  onSubmit() {

    const registerObject = {
      text: this.registerForm.value.textFormControl,
      apellido: this.registerForm.value.textViewApellido,
      email: this.registerForm.value.emailFormControl,
      password: this.registerForm.value.textViewContrasenya,
    }

    //LLamada a la api

  }


}
