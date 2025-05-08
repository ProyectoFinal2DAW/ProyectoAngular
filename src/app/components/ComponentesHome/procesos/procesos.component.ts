import { Component, AfterViewInit } from '@angular/core';
import  'aos/dist/aos.css';
import AOS from 'aos';

@Component({
  selector: 'app-procesos',
  imports: [],
  templateUrl: './procesos.component.html',
  styleUrl: './procesos.component.css'
})
export class ProcesosComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }

}
