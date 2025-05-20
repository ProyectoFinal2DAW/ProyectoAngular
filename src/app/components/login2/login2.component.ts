import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { getListUsers, getUserImage, getUserRole } from '../../DBManagement/AzureManagement';
import { NewUser } from '../../../interfaces/newUser';
import { getUserWithEmail, postUser } from '../../DBManagement/DBManagement';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  loginInProgress = false;

  constructor(private msalService: MsalService, private router: Router) { }

  ngOnInit(): void {
    // Manejo del redireccionamiento después de un login exitoso
    this.msalService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result && result.account) {

          console.log("Login result: ", result);

          getUserRole(result);

          getUserImage(result);

          (async () => {
            
            const userbd = await getUserWithEmail(result.account.username);

            console.log("User from DB: ", userbd);
            //const userbd = 0; // simulado

            if (userbd == null) {
              const newUser: NewUser = {
                id_roles: 0,
                usuario: result.account.name || "",
                email: result.account.username,
                contrasena: "",
                estado: "activa",
                profileImage: ""
              };

              let rol = sessionStorage.getItem('jobTitle') || "";
              console.log("Rol: ", rol);
              if (rol === "Alumne") {
                newUser.id_roles = 1;
              } else {
                newUser.id_roles = 2;
              }

              newUser.profileImage = sessionStorage.getItem('profileImageUrl') || "http://monlab.ddns.net/images/noUserImage.jpg";

              const userCreated = await postUser(newUser);
              console.log("Api response post user: ", userCreated);
              sessionStorage.setItem("id_usuario", userCreated.id_usuarios);
            } else {
              console.log("Entra en el else");
              sessionStorage.setItem("id_usuario", userbd.id_usuarios.toString());
            }

            // Guardar en sessionStorage
            sessionStorage.setItem('accessToken', result.accessToken);
            sessionStorage.setItem('email', result.account.username);
            sessionStorage.setItem('name', result.account.name || "");

            // Redirigir
            this.router.navigate(['/home']);
          })();
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
      //console.log("Login already in progress");
      return;
    }

    this.loginInProgress = true;

    this.msalService.loginRedirect();  // Realiza el login con MSAL
  }
}
