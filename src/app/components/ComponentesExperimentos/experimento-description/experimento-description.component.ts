import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Experiment } from '../../../../interfaces/experiment';
import Chart from 'chart.js/auto';
import { getExperimentById, getExperimentsDataById } from '../../../DBManagement/DBManagement';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ExperimentData } from '../../../../interfaces/experimentData';
import { DistanceTimeData } from '../../../../interfaces/distanceTimeData';


@Component({
  selector: 'app-experimento-description',
  imports: [],
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
  experiment_data: ExperimentData = {
    id_datos: 0,
    id_experimento: 0,
    masa1: 0,
    masa2: 0,
    masa3: 0,
    masa4: 0,
    velocidad1: 0,
    velocidad2: 0,
    velocidad3: 0,
    velocidad4: 0,
    velocidad5: 0,
    altura1: 0,
    altura2: 0,
    altura3: 0,
    altura4: 0,
    tiempo1: new Date(),
    tiempo2: new Date(),
    tiempo3: new Date(),
    tiempo4: new Date(),
    resultado: null,
    tipoExperimento: "",
    longitud: 0,
    gravedad: 9.81,
    angulo_inclinación: 0,
    tiempo5: new Date()
  };

  listaTiempos: Date[] = [];

  distanceTimeData: DistanceTimeData[] = [];

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
    this.experiment_data = await getExperimentsDataById(this.id_experiment);
    console.log("ExperimentData : ", this.experiment_data);

    let distancia = this.experiment_data.longitud / 3;

    this.listaTiempos.push(new Date(this.experiment_data.tiempo1));
    this.listaTiempos.push(new Date(this.experiment_data.tiempo2));
    this.listaTiempos.push(new Date(this.experiment_data.tiempo3));



    for (let i = 0; i < 3; i++) {

      let object: DistanceTimeData = {
        dist: 0,
        tiempo: new Date(),
        velocidad: 0,
        aceleracion: 0
      }

      if (i == 0) {
        object.dist = 0;
      } else {
        object.dist = this.distanceTimeData[i - 1].dist + distancia;
      }

      object.tiempo = this.listaTiempos[i];

      if (i > 0) {
        const prev = this.distanceTimeData[i - 1];
        const deltaDist = object.dist - prev.dist;

        const deltaTime = (object.tiempo.getTime() - prev.tiempo.getTime()) / 1000; // en segundos

        object.velocidad = deltaTime !== 0 ? deltaDist / deltaTime : 0;

        // Calcular aceleración si hay al menos 2 velocidades
        if (i > 1) {
          const prevVel = prev.velocidad;
          const deltaVel = object.velocidad - prevVel;
          const deltaTimeVel = deltaTime;

          object.aceleracion = deltaTimeVel !== 0 ? deltaVel / deltaTimeVel : 0;
        } else {
          object.aceleracion = 0;
        }
      } else {
        object.velocidad = 0;
        object.aceleracion = 0;
      }

      this.distanceTimeData.push(object);


    }
    console.log("Datos: ", this.distanceTimeData);

    console.log("DistanceTimeData: ", this.distanceTimeData);

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
/*     this.renderChart();
 */    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
  }

  /* renderChart() {
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
  } */
  renderChart1() {
    if (!this.chartCanvas1) return;

    new Chart(this.chartCanvas1.nativeElement, {
      type: 'line',
      data: {
        labels: ['0s', '1s', '2s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 5, 15],
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
        labels: ['0s', '1s', '2s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 10, 20],
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
        labels: ['0s', '1s', '2s'],
        datasets: [
          {
            label: 'Datos del Experimento',
            data: [0, 2, 4],
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
