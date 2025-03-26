import { Component, OnInit } from '@angular/core';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configurations',
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.css'
})
export class ConfigurationsComponent {

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

  fechaActual: string = '';
  horaActual: string = '';

  ngOnInit() {
    const ahora = new Date();

    this.fechaActual = ahora.toISOString().split('T')[0];

    this.horaActual = ahora.toTimeString().slice(0, 5);
  }
}
