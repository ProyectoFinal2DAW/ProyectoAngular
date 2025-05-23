import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiment } from '../../../../interfaces/experiment';
import Chart from 'chart.js/auto';
import { getExperimentById, getExperimentsDataById } from '../../../DBManagement/DBManagement';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ExperimentData } from '../../../../interfaces/experimentData';
import { DistanceTimeData } from '../../../../interfaces/distanceTimeData';

@Component({
  selector: 'app-experimento-description',
  templateUrl: './experimento-description.component.html',
  styleUrl: './experimento-description.component.css'
})
export class ExperimentoDescriptionComponent {

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
    tiempo1: new Date(),
    tiempo2: new Date(),
    tiempo3: new Date(),
    tiempo4: new Date(),
    tiempo5: new Date(),
  };

  distanceTimeData: DistanceTimeData[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_experiment = params['id'];
      this.fetchData();
    });
  }

  async fetchData() {
    this.experiment = await getExperimentById(this.id_experiment);
    this.experiment_data = await getExperimentsDataById(this.id_experiment);

    const tiemposOriginales: Date[] = [
      new Date(this.experiment_data.tiempo1),
      new Date(this.experiment_data.tiempo2),
      new Date(this.experiment_data.tiempo3),
      new Date(this.experiment_data.tiempo4)
    ];

    const tiempoBase = tiemposOriginales[0].getTime();
    this.distanceTimeData = [];

    const DISTANCIA_ENTRE_SENSORES = 0.5; // 50 cm = 0.5 metros

    for (let i = 0; i < tiemposOriginales.length; i++) {
      const tiempoRelativo = (tiemposOriginales[i].getTime() - tiempoBase) / 1000;

      let object: DistanceTimeData = {
        dist: i * DISTANCIA_ENTRE_SENSORES,
        tiempo: new Date(tiempoBase + tiempoRelativo * 1000),
        tiempoSegundos: tiempoRelativo,
        velocidad: 0,
        aceleracion: 0
      };

      if (i > 0) {
        const prev = this.distanceTimeData[i - 1];
        const deltaDist = object.dist - prev.dist;
        const deltaTime = object.tiempoSegundos - prev.tiempoSegundos;

        object.velocidad = deltaTime !== 0 ? deltaDist / deltaTime : 0;

        if (i > 1) {
          const prevVel = prev.velocidad;
          const deltaVel = object.velocidad - prevVel;
          object.aceleracion = deltaTime !== 0 ? deltaVel / deltaTime : 0;
        }
      }

      this.distanceTimeData.push(object);
    }

    const url = this.experiment.video_experimento;
    if (url.includes("?v=")) {
      const urlBase = "https://www.youtube.com/embed/";
      const urlVideoId = url.split('?v=')[1];
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlBase + urlVideoId);
    }

    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
  }

  renderChart1() {
    if (!this.chartCanvas1) return;

    new Chart(this.chartCanvas1.nativeElement, {
      type: 'line',
      data: {
        labels: this.distanceTimeData.map(d => `${d.tiempoSegundos.toFixed(2)}s`),
        datasets: [{
          label: 'Distancia (m)',
          data: this.distanceTimeData.map(d => d.dist),
          borderColor: 'blue',
          fill: false
        }]
      },
      options: this.getChartOptions('Tiempo (s)', 'Distancia (m)')
    });
  }

  renderChart2() {
    if (!this.chartCanvas2) return;

    new Chart(this.chartCanvas2.nativeElement, {
      type: 'line',
      data: {
        labels: this.distanceTimeData.map(d => `${d.tiempoSegundos.toFixed(2)}s`),
        datasets: [{
          label: 'Velocidad (m/s)',
          data: this.distanceTimeData.map(d => d.velocidad),
          borderColor: 'green',
          fill: false
        }]
      },
      options: this.getChartOptions('Tiempo (s)', 'Velocidad (m/s)')
    });
  }

  renderChart3() {
    if (!this.chartCanvas3) return;

    new Chart(this.chartCanvas3.nativeElement, {
      type: 'line',
      data: {
        labels: this.distanceTimeData.map(d => `${d.tiempoSegundos.toFixed(2)}s`),
        datasets: [{
          label: 'Aceleración (m/s²)',
          data: this.distanceTimeData.map(d => d.aceleracion),
          borderColor: 'red',
          fill: false
        }]
      },
      options: this.getChartOptions('Tiempo (s)', 'Aceleración (m/s²)')
    });
  }

  getChartOptions(xLabel: string, yLabel: string) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: xLabel
          }
        },
        y: {
          title: {
            display: true,
            text: yLabel
          }
        }
      }
    };
  }
}
