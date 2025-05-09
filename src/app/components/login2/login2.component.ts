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

          //----------------------- Obtener grupos a los que esta asignado -------------------------------
          fetch('https://graph.microsoft.com/v1.0/me/', {
            headers: {
              Authorization: `Bearer ${result.accessToken}`,
            },
          })
            .then(response => response.json())
            .then((rolesResponse: any) => {
              sessionStorage.setItem('jobTitle', rolesResponse.jobTitle || "");
              console.log('Roles del usuario:', rolesResponse);
            })

          //--------------------------------------------------------------
          //----------------------- Obtener grupos a los que esta asignado -------------------------------
          fetch('https://graph.microsoft.com/v1.0/me/memberof', {
            headers: {
              Authorization: `Bearer ${result.accessToken}`,
            },
          })
            .then(response => response.json())
            .then((rolesResponse: any) => {
              //sessionStorage.setItem('jobTitle', rolesResponse.jobTitle || "");
              console.log('Roles del usuario:', rolesResponse);
            })

          //--------------------------------------------------------------

          //-------------------------Obtener foto de perfil-------------------------------
          fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${result.accessToken}`
            }
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('No se pudo obtener la imagen de perfil.');
              }
              return response.blob(); // Recibe la imagen como binario
            })
            .then(blob => {
              const imageUrl = URL.createObjectURL(blob);
              // Ahora puedes usar esta URL en tu HTML para mostrar la imagen
              //this.profileImageUrl = imageUrl;
              console.log('URL de la imagen de perfil:', imageUrl);

              sessionStorage.setItem('profileImageUrl', imageUrl); // Guardar la URL de la imagen en sessionStorage
            })
            .catch(error => {
              console.error('Error al obtener la imagen de perfil:', error);
            });
          //--------------------------------------------------------------

          sessionStorage.setItem('accessToken', result.accessToken);
          sessionStorage.setItem('email', result.account.username); // Guardar el email en sessionStorage
          sessionStorage.setItem('name', result.account.name || ""); // Guardar el nombre en sessionStorage



          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }

  onSubmit() {
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
      next: () => { },
      error: err => {
        console.error(err);
        this.loginInProgress = false;
      }
    });
  }
}