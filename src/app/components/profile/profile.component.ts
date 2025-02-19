import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, MatInputModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
