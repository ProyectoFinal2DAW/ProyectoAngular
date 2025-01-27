import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component'; // Este será tu componente para el index
import { Login1Component } from './login1/login1.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal (index)
  { path: 'login', component: Login1Component }, // Ruta para /login
];