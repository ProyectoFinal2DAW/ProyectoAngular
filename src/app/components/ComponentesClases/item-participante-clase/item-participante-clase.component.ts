import { Component, Input } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-item-participante-clase',
  imports: [],
  templateUrl: './item-participante-clase.component.html',
  styleUrl: './item-participante-clase.component.css'
})
export class ItemParticipanteClaseComponent {
  @Input() participante: User = {
    id_usuarios: 0,
    id_roles: 0,
    usuario: "",
    email: "",
    estado: "",
    fecha_creacion: null,
    rol: {
      id_roles: 0,
      rol: "",
    },
  }
}
