import { Component, Input } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-item-response-form-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './item-response-form-component.component.html',
  styleUrl: './item-response-form-component.component.css'
})
export class ItemResponseFormComponentComponent {
  @Input() question: Question = {
    id_questionario: 0,
    enunciado: "",
    correcta: "",
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    id_pregunta: 0,
  }
}
