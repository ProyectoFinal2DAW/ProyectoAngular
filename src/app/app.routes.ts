import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component'; // Este será tu componente para el index
import { Login1Component } from './components/login1/login1.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoExperimentsComponent } from './components/video-experiments/video-experiments.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal (index)
  { path: 'login', component: Login1Component }, // Ruta para /login
  { path: 'register', component: RegisterComponent }, // Ruta para /register

  { path: 'home', component: HomeComponent }, // Ruta para /home
  { path: 'userProfile', component: ProfileComponent }, // Ruta para /userProfile
  { path: 'videoExperiments', component: VideoExperimentsComponent }, // Ruta para /userProfile

];