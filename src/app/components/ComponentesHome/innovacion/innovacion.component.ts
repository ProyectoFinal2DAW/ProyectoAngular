import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-innovacion',
  imports: [],
  templateUrl: './innovacion.component.html',
  styleUrl: './innovacion.component.css'
})
export class InnovacionComponent implements OnInit {
  innovationProjects = [
    {
      id: 1,
      title: 'Sistema de Riego Automatizado con IA',
      description: 'Control inteligente de humedad del suelo usando sensores y predicción climática.',
      image: 'images/riego.jpg',
    },
    {
      id: 2,
      title: 'Domótica con Energía Solar',
      description: 'Proyecto de integración de paneles solares en casas domóticas del laboratorio.',
      image: 'images/solar.jpg',
    },
    {
      id: 3,
      title: 'Reconocimiento de Voz para Automatización',
      description: 'Control de sistemas mediante comandos de voz usando modelos de ML locales.',
      image: 'images/voz.jpg',
    },
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }

}
