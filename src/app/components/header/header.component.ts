import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from  '@angular/material/button' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, 
  imports: [MatMenuModule, MatButtonModule, RouterLink], 
})

export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenuOnNavigation() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-container')) {
      this.isOpen = false;
    }
  }
}
