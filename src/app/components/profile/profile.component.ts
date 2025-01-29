import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, UserProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
