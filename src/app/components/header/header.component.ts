import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from  '@angular/material/button' ;

@Component({
  selector: 'app-header', // Este es el selector que usarás en tu HTML
  templateUrl: './header.component.html', // HTML del header
  styleUrls: ['./header.component.css'], // Archivo CSS del header
  standalone: true, // Habilita que este componente pueda usarse sin estar en un módulo
  imports: [MatMenuModule, MatButtonModule, RouterLink] // Importa los módulos necesarios para Angular Material
})

export class HeaderComponent {

}
