import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { Login1Component } from './components/login1/login1.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoExperimentsComponent } from './components/video-experiments/video-experiments.component';
import { ExperimentsComponent } from './components/experiments/experiments.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { BoxQuestionFormComponentComponent } from './components/box-question-form-component/box-question-form-component.component';
import { ContainerClassComponent } from './components/container-class/container-class.component';
import { ExperimentoDescriptionComponent } from './components/experimento-description/experimento-description.component';
import { Login2Component } from './components/login2/login2.component';

export const routes: Routes = [
  { path: '', component: Login2Component }, // Ruta principal (index)
  { path: 'login', component: Login2Component }, // Ruta para /login
  //{ path: 'login2', component: Login2Component }, // Ruta para /login
  { path: 'register', component: RegisterComponent }, // Ruta para /register

  { path: 'home', component: HomeComponent }, // Ruta para /home
  { path: 'userProfile', component: ProfileComponent }, // Ruta para /userProfile
  { path: 'videoExperiments', component: VideoExperimentsComponent }, // Ruta para /userProfile
  { path: 'experimentos', component: ExperimentsComponent }, // Ruta para /experimentos
  { path: 'experimentDescription', component: ExperimentoDescriptionComponent }, // Ruta para /experimentos

  { path: 'clases', component: ClasesComponent }, // Ruta para /clases
  { path: 'clase', component: ContainerClassComponent }, // Ruta para /configuration

  { path: 'configuration', component: ConfigurationsComponent }, // Ruta para /configuration

  { path: 'form', component: BoxQuestionFormComponentComponent }, // Ruta para /configuration


];