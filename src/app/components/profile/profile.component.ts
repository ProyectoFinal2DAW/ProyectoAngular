import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  editando = false;

  imgenPerfil: string = "";
  nombre: string = "";
  email: string = "";

  activarEdicion() {
    this.editando = true;
  }

  guardar() {
    ////console.log('Guardado');
    this.editando = false;
  }

  cancelar() {
    ////console.log('Cancelado');
    this.editando = false;
  }

  fechaActual: string = '';
  horaActual: string = '';

  ngOnInit() {
    const ahora = new Date();

    this.imgenPerfil = sessionStorage.getItem("profileImageUrl")  || '';

    if (this.imgenPerfil === '') {
      this.imgenPerfil = "/images/noUserProfile.png";
    }

    this.nombre = sessionStorage.getItem("name") || '';
    this.email = sessionStorage.getItem("email") || '';

    this.fechaActual = ahora.toISOString().split('T')[0];

    this.horaActual = ahora.toTimeString().slice(0, 5);
  }
}
