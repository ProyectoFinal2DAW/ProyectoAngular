import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [MatInputModule, MatButtonModule],
})
export class UserProfileComponent {

}
