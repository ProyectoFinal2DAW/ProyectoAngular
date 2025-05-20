import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-div-home-page',
  templateUrl: './div-home-page.component.html',
  styleUrl: './div-home-page.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class DivHomePageComponent {

}
