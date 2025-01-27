import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component'; // Este será tu componente para el index

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal (index)
  { path: 'login', component: LoginComponent }, // Ruta para /login
];