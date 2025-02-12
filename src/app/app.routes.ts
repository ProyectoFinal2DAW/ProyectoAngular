import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component'; // Este será tu componente para el index
import { Login1Component } from './components/login1/login1.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoExperimentsComponent } from './components/video-experiments/video-experiments.component';
import { ExperimentsComponent } from './components/experiments/experiments.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { BoxQuestionFormComponentComponent } from './components/box-question-form-component/box-question-form-component.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal (index)
  { path: 'login', component: Login1Component }, // Ruta para /login
  { path: 'register', component: RegisterComponent }, // Ruta para /register

  { path: 'home', component: HomeComponent }, // Ruta para /home
  { path: 'userProfile', component: ProfileComponent }, // Ruta para /userProfile
  { path: 'videoExperiments', component: VideoExperimentsComponent }, // Ruta para /userProfile
  { path: 'experimentos', component: ExperimentsComponent }, // Ruta para /experimentos
  { path: 'clases', component: ClasesComponent }, // Ruta para /clases
  { path: 'configuration', component: ConfigurationsComponent }, // Ruta para /configuration

  { path: 'form', component: BoxQuestionFormComponentComponent }, // Ruta para /configuration

];