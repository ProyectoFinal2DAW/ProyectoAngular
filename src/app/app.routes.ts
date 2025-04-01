import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/ComponentesHome/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperimentsComponent } from './components/ComponentesExperimentos/experiments/experiments.component';
import { ClasesComponent } from './components/ComponentesClases/clases/clases.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { BoxQuestionFormComponentComponent } from './components/ComponentesFormularioExamenes/box-question-form-component/box-question-form-component.component';
import { ContainerClassComponent } from './components/ComponentesClases/container-class/container-class.component';
import { ExperimentoDescriptionComponent } from './components/ComponentesExperimentos/experimento-description/experimento-description.component';
import { Login2Component } from './components/login2/login2.component';
import { FormCreateExamComponent } from './components/ComponentesFormularioExamenes/form-create-exam/form-create-exam.component';
import { DescripcionTemarioComponent } from './components/ComponentesClases/descripcion-temario/descripcion-temario.component';
import { ProtocolosComponent } from './components/ComponentesHome/protocolos/protocolos.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Login2Component }, // Ruta principal (index)
  { path: 'login', component: Login2Component }, // Ruta para /login
  //{ path: 'login2', component: Login2Component }, // Ruta para /login
  { path: 'register', component: RegisterComponent }, // Ruta para /register

  { path: 'home', component: HomeComponent }, //canActivate: [AuthGuard] poner esto en todas las rutas para protegerlas si no has iniciado sesión // Ruta para /home
  { path: 'userProfile', component: ProfileComponent }, // Ruta para /userProfile
  { path: 'experimentos', component: ExperimentsComponent }, // Ruta para /experimentos
  { path: 'experimentDescription', component: ExperimentoDescriptionComponent }, // Ruta para /experimentos

  { path: 'clases', component: ClasesComponent }, // Ruta para lista de clases
  { path: 'clase', component: ContainerClassComponent }, // Ruta para /Detalles clase
  { path: 'temarioDescription', component: DescripcionTemarioComponent }, // Ruta para /configuration

  { path: 'configuration', component: ConfigurationsComponent }, // Ruta para /configuration

  { path: 'form', component: BoxQuestionFormComponentComponent }, // Ruta para /formularioExamen
  { path: 'createExam', component: FormCreateExamComponent }, // Ruta para /configuration
  { path: 'protocolos', component: ProtocolosComponent }, // Ruta para /protocolos


];