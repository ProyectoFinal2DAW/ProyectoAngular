import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Experiment } from '../../../../interfaces/experiment';
import Chart from 'chart.js/auto';
import { getExperimentById } from '../../../DBManagement/DBManagement';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from 'express';


@Component({
  selector: 'app-experimento-description',
  imports: [RouterLink],
  templateUrl: './experimento-description.component.html',
  styleUrl: './experimento-description.component.css'
})
export class ExperimentoDescriptionComponent {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef; // Referencia al canvas
  @ViewChild('chartCanvas1') chartCanvas1!: ElementRef;
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef;
  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;

  id_experiment: number = 0;
  videoUrl?: SafeResourceUrl;

  experiment: Experiment = {
    id_experimento: 0,
    nombre_experimento: "",
    descrip_experimento: "",
    foto_experimento: "",
    video_experimento: "",
    asignatura: ""
  }

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_experiment = params['id'];
      console.log("Id recibido: " + this.id_experiment);
    });

    this.fetchData();

  }

  async fetchData() {
    this.experiment = await getExperimentById(this.id_experiment);


    let url = this.experiment.video_experimento;
    let urlBase = "https://www.youtube.com/embed/";
    let urlVideoId = url.split('?v=')[1]

    let urlEnbed = urlBase + urlVideoId;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlEnbed);

    console.log("VideoURL: ", this.videoUrl);
    //console.log("contenido clase: ", this.contenidoClase);

    //this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.experiment.video_experimento);

  }

  ngAfterViewInit() {
    this.renderChart();
    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
  }

  renderChart() {
    if (!this.chartCanvas) return;

    new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Distancia',
            data: [10, 20, 15, 30, 25],
            borderColor: 'blue',
            fill: false
          },
          {
            label: 'Velocidad',
            data: [30, 50, 20, 40, 25],
            borderColor: 'green',
            fill: false
          },
          {
            label: 'Aceleración',
            data: [40, 60, 20, 30, 15],
            borderColor: 'red',
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
  renderChart1() {
    if (!this.chartCanvas1) return;

    new Chart(this.chartCanvas1.nativeElement, {
      type: 'line',
      data: {
        labels: ['0s', '1s', '2s', '3s', '4s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 5, 15, 30, 50],
            borderColor: 'blue',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // <- Oculta la leyenda
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tiempo (s)' // Etiqueta del eje X
            }
          },
          y: {
            title: {
              display: true,
              text: 'Distancia (m)' // Etiqueta del eje Y
            }
          }
        }
      }
    })
  }
  renderChart2() {
    if (!this.chartCanvas2) return;

    new Chart(this.chartCanvas2.nativeElement, {
      type: 'line',
      data: {
        labels: ['0s', '1s', '2s', '3s', '4s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 10, 20, 25, 30],
            borderColor: 'green',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // <- Oculta la leyenda
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tiempo (s)' // Eje X
            }
          },
          y: {
            title: {
              display: true,
              text: 'Velocidad (m/s)' // Eje Y
            }
          }
        }
      }
    });
  }
  renderChart3() {
    if (!this.chartCanvas3) return;

    new Chart(this.chartCanvas3.nativeElement, {
      type: 'line',
      data: {
        labels: ['0s', '1s', '2s', '3s', '4s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 2, 4, 3, 1],
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // <- Oculta la leyenda
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tiempo (s)' // Eje X
            }
          },
          y: {
            title: {
              display: true,
              text: 'Aceleración (m/s²)' // Eje Y
            }
          }
        }
      }
    });
  }
}
