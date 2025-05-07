import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private msalService: MsalService, private router: Router) {
    this.loginForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      textViewContrasenya: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.msalService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result && result.account) {
          console.log('Inicio de sesión exitoso:', result);
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }

  onSubmit(){
    const loginObject = {
      email: this.loginForm.value.emailFormControl,
      password: this.loginForm.value.textViewContrasenya,
    }
    // Llamada a la API...
  }

  loginInProgress = false;

  loginWithAzure() {
    if (this.loginInProgress) {
      console.log("Login already in progress");
      return;
    }
    this.loginInProgress = true;
    this.msalService.loginRedirect().subscribe({
      next: () => {},
      error: err => {
        console.error(err);
        this.loginInProgress = false;
      }
    });
  }
}