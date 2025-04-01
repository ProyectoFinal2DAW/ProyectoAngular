import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Question } from '../../../../interfaces/question';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-item-response-form-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './item-response-form-component.component.html',
  styleUrl: './item-response-form-component.component.css'
})
export class ItemResponseFormComponentComponent implements OnInit {
  @Input() question: Question = {
    id_questionario: 0,
    enunciado: "",
    correcta: "",
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    id_pregunta: 0,
  }

  opcionesMezcladas: { texto: string; valor: string }[] = [];

  ngOnInit() {
    this.mezclarRespuestas();
  }

  mezclarRespuestas() {
    this.opcionesMezcladas = [
      { texto: this.question.respuesta1, valor: this.question.respuesta1 },
      { texto: this.question.respuesta2, valor: this.question.respuesta2 },
      { texto: this.question.respuesta3, valor: this.question.respuesta3 },
      { texto: this.question.correcta, valor: this.question.correcta }
    ];

    // Mezclar las opciones aleatoriamente
    this.opcionesMezcladas = this.opcionesMezcladas.sort(() => Math.random() - 0.5);
  }

  @Output() respuestaSeleccionada = new EventEmitter<{ id: number, respuesta: string }>(); 

  onSelectedRespuesta(respuesta: string) {
    console.log("Seleccionaste:", respuesta);
    this.respuestaSeleccionada.emit({ id: this.question.id_pregunta, respuesta });
  }


}
