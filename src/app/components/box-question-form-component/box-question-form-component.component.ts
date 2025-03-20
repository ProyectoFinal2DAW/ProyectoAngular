import { Component } from '@angular/core';
import { ItemResponseFormComponentComponent } from "../item-response-form-component/item-response-form-component.component";
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from '../../../interfaces/question';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { getPreguntasCuestionario } from '../../DBManagement/DBManagement';


@Component({
  selector: 'app-box-question-form-component',
  imports: [ItemResponseFormComponentComponent, ReactiveFormsModule],
  templateUrl: './box-question-form-component.component.html',
  styleUrl: './box-question-form-component.component.css'
})

export class BoxQuestionFormComponentComponent {

  id_questionario: number = 0;
  nombre_cuestionario: string = "";
  listQuestions: Question[] = [];

  formCuestionario: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {

    this.formCuestionario = this.fb.group({
      className: ['', Validators.required],
      classDescription: ['', Validators.required],
      classContent: [''],
      classImage: [''],
    });

  }


  onSubmit() {
    console.log("onSubmit()");



  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_questionario = params['id'];
      this.nombre_cuestionario = params['nombre'];
      console.log("Id recibido: " + this.id_questionario);
    });

    this.fetchData();
  }

  async fetchData() {
    console.log("fetchData()");

    this.listQuestions = await getPreguntasCuestionario(this.id_questionario);

  }


}
