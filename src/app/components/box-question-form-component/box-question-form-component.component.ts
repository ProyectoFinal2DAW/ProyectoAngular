import { Component } from '@angular/core';
import { ItemResponseFormComponentComponent } from "../item-response-form-component/item-response-form-component.component";
import { Question } from '../../../interfaces/question';


@Component({
  selector: 'app-box-question-form-component',
  imports: [ItemResponseFormComponentComponent],
  templateUrl: './box-question-form-component.component.html',
  styleUrl: './box-question-form-component.component.css'
})
export class BoxQuestionFormComponentComponent {

  listQuestions: Question[] = [
    {id_questionario: 1, enunciado: "Enunciado chfghfghfghfghfhfghfghfh", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},
    {id_questionario: 1, enunciado: "Enunciado ghfghfghfghfghfghfhfghfghfghfghfghfghfghfgh", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},
    {id_questionario: 1, enunciado: "Enunciado", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},
    {id_questionario: 1, enunciado: "Enunciado", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},
    {id_questionario: 1, enunciado: "Enunciado", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},
    {id_questionario: 1, enunciado: "Enunciado", respuesta: "Respuesta", correcta: "correcta", respuesta1: "respuesta1", respuesta2: "respuesta2", respuesta3: "respuesta3"},

  ]

}
