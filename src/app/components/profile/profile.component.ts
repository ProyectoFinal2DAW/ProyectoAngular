import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  editando = false;

  activarEdicion() {
    this.editando = true;
  }

  guardar() {
    console.log('Guardado');
    this.editando = false;
  }

  cancelar() {
    console.log('Cancelado');
    this.editando = false;
  }
}
