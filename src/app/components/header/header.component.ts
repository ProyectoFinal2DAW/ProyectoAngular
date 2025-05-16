import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterLink],
})
export class HeaderComponent {
  isOpen = false;

  constructor(private msalService: MsalService, private router: Router) {}

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

  logout() {
    // Borra almacenamiento local por si has usado localStorage/sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Llama a logout de MSAL y redirige a /login
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: '/login'
    });
  }
}
