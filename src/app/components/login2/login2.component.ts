import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  loginInProgress = false;

  constructor(private msalService: MsalService, private router: Router) {}

  ngOnInit(): void {
    // Manejo del redireccionamiento después de un login exitoso
    this.msalService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result && result.account) {
          console.log('Inicio de sesión exitoso:', result);

          //----------------------- Obtener grupos a los que está asignado -------------------------------
          fetch('https://graph.microsoft.com/v1.0/me/memberOf', {
            headers: {
              Authorization: `Bearer ${result.accessToken}`,
            },
          })
            .then(response => response.json())
            .then((rolesResponse: any) => {
              console.log('Roles del usuario:', rolesResponse);
            })
            .catch(error => console.error('Error al obtener los roles:', error));

          //------------------------- Obtener foto de perfil -------------------------------
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
            console.log('URL de la imagen de perfil:', imageUrl);
            sessionStorage.setItem('profileImageUrl', imageUrl); // Guardar la URL de la imagen en sessionStorage
          })
          .catch(error => console.error('Error al obtener la imagen de perfil:', error));

          // Guardamos la información en sessionStorage
          sessionStorage.setItem('accessToken', result.accessToken);
          sessionStorage.setItem('email', result.account.username); // Guardar el email en sessionStorage
          sessionStorage.setItem('name', result.account.name || ""); // Guardar el nombre en sessionStorage

          // Redirigir a la página principal
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }

  // Método para iniciar el login con Microsoft
  loginWithAzure() {
    if (this.loginInProgress) {
      console.log("Login already in progress");
      return;
    }

    this.loginInProgress = true;
    
    this.msalService.loginRedirect();  // Realiza el login con MSAL

    // En este punto no es necesario hacer nada más, ya que el flujo de login se maneja con redirect.
  }
}
