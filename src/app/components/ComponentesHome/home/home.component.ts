import { Component, AfterViewInit } from '@angular/core';
import { DivHomePageComponent } from "../div-home-page/div-home-page.component";
import { DivHomePageOpc2Component } from '../div-home-page-opc2/div-home-page-opc2.component';
import { DivHomePageOpc3Component } from '../div-home-page-opc3/div-home-page-opc3.component';
import { DivHomePageOpc4Component } from '../div-home-page-opc4/div-home-page-opc4.component';
import { RouterLink } from '@angular/router';
import AOS from 'aos';


@Component({
  selector: 'app-home',
  imports: [RouterLink, DivHomePageComponent, DivHomePageOpc2Component, DivHomePageOpc3Component, DivHomePageOpc4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
      once: true
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 500);
  }

}
