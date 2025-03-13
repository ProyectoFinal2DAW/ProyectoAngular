import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Experiment } from '../../../interfaces/experiment';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-experimento-description',
  imports: [],
  templateUrl: './experimento-description.component.html',
  styleUrl: './experimento-description.component.css'
})
export class ExperimentoDescriptionComponent {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef; // Referencia al canvas

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

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    if (!this.chartCanvas) return;

    new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [10, 20, 15, 30, 25],
            borderColor: 'blue',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
