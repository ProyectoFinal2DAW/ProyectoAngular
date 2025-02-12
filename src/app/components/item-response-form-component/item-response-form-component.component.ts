import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-response-form-component',
  imports: [],
  templateUrl: './item-response-form-component.component.html',
  styleUrl: './item-response-form-component.component.css'
})
export class ItemResponseFormComponentComponent {
  @Input() opcionRespuesta: string = ""
}
