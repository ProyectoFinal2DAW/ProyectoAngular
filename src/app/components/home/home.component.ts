import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DivHomePageComponent } from "../div-home-page/div-home-page.component";
import { Router } from 'express';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, DivHomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
