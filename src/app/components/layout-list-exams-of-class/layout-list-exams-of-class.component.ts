import { Component, Input } from '@angular/core';
import { CuestionarioInfoGeneral } from '../../../interfaces/cuestionarioInfoGeneral';

@Component({
  selector: 'app-layout-list-exams-of-class',
  imports: [],
  templateUrl: './layout-list-exams-of-class.component.html',
  styleUrl: './layout-list-exams-of-class.component.css'
})
export class LayoutListExamsOfClassComponent {

  //TODO: Cambiar por el usuario logeado
  teacherUser: boolean = false;

  @Input() cuestionario: CuestionarioInfoGeneral = {
    id_questionario: 0,
    nombre_cuestionario: "",
    fecha_publicacion: null
  }



}
