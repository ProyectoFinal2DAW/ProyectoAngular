import { Component } from '@angular/core';
import { DivHomePageComponent } from "../div-home-page/div-home-page.component";
import { LayoutProfesoresHomePageComponent } from "../layout-profesores-home-page/layout-profesores-home-page.component";
import { LayoutExperimentoOpc1Component } from "../layout-experimento-opc1/layout-experimento-opc1.component";
import { LayoutExperimentoOpc2Component } from "../layout-experimento-opc2/layout-experimento-opc2.component";
import { DivHomePageOpc2Component } from "../div-home-page-opc2/div-home-page-opc2.component";
import { DivHomePageOpc3Component } from "../div-home-page-opc3/div-home-page-opc3.component";
import { DivHomePageOpc4Component } from "../div-home-page-opc4/div-home-page-opc4.component";

@Component({
  selector: 'app-home',
  imports: [DivHomePageComponent, LayoutProfesoresHomePageComponent, LayoutExperimentoOpc1Component, LayoutExperimentoOpc2Component, DivHomePageOpc2Component, DivHomePageOpc3Component, DivHomePageOpc4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
