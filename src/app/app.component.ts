import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miProyectoAngular';

  constructor(private router: Router) {}

  isLoginOrRegister(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/';
  }
}
