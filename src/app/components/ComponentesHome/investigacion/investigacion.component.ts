import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Experiment } from '../../../../interfaces/experiment';
import { getExperiments } from '../../../DBManagement/DBManagement';
import  'aos/dist/aos.css';
import AOS from 'aos';

@Component({
  selector: 'app-investigacion',
  imports: [],
  templateUrl: './investigacion.component.html',
  styleUrl: './investigacion.component.css'
})
export class InvestigacionComponent implements AfterViewInit, OnInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }

  listExperiments: Experiment[] = [];

  async ngOnInit() {
    const allExperiments = await getExperiments();
    this.listExperiments = allExperiments.slice(0, 3);
  }

}
