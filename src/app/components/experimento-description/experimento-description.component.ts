import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Experiment } from '../../../interfaces/experiment';

@Component({
  selector: 'app-experimento-description',
  imports: [RouterLink],
  templateUrl: './experimento-description.component.html',
  styleUrl: './experimento-description.component.css'
})
export class ExperimentoDescriptionComponent {

  id_experiment: number = 0;

  experiment: Experiment = {
    id_experimento: 0,
    nombre_experimento: "",
    descrip_experimento: "",
    foto_experimento: "",
    video_experimento: "",
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_experiment = params['id'];
      console.log("Id recibido: " + this.id_experiment);
    });

    this.fetchData();
  }

  async fetchData() {
    let response = await fetch('http://localhost:8000/experimentos/' + this.id_experiment);

    this.experiment = await response.json();
    console.log("Experiment: ", this.experiment);
    
  }

}
