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
import { ProcesosComponent } from './components/ComponentesHome/procesos/procesos.component';
import { InvestigacionComponent } from './components/ComponentesHome/investigacion/investigacion.component';
import { InnovacionComponent } from './components/ComponentesHome/innovacion/innovacion.component';
import { RedirectComponent } from './components/redirect/redirect.component';

export const routes: Routes = [
  { path: '', component: Login2Component }, // Ruta principal (index)
  { path: 'login', component: Login2Component }, // Ruta para /login
  //{ path: 'login2', component: Login2Component }, // Ruta para /login
  { path: 'register', component: RegisterComponent }, // Ruta para /register
  { path: 'callback', component: RedirectComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, //canActivate: [AuthGuard] poner esto en todas las rutas para protegerlas si no has iniciado sesión // Ruta para /home
  { path: 'userProfile', component: ProfileComponent, canActivate: [AuthGuard] }, // Ruta para /userProfile
  { path: 'experimentos', component: ExperimentsComponent, canActivate: [AuthGuard] }, // Ruta para /experimentos
  { path: 'experimentDescription', component: ExperimentoDescriptionComponent, canActivate: [AuthGuard] }, // Ruta para /experimentos

  { path: 'infoComplementaria', component: ClasesComponent, canActivate: [AuthGuard] }, // Ruta para lista de clases
  { path: 'clase', component: ContainerClassComponent, canActivate: [AuthGuard] }, // Ruta para /Detalles clase
  { path: 'temarioDescription', component: DescripcionTemarioComponent, canActivate: [AuthGuard] }, // Ruta para /configuration

  { path: 'configuration', component: ConfigurationsComponent, canActivate: [AuthGuard] }, // Ruta para /configuration

  { path: 'form', component: BoxQuestionFormComponentComponent, canActivate: [AuthGuard] }, // Ruta para /formularioExamen
  { path: 'createExam', component: FormCreateExamComponent, canActivate: [AuthGuard] }, // Ruta para /configuration
  { path: 'protocolos', component: ProtocolosComponent, canActivate: [AuthGuard] }, // Ruta para /protocolos
  { path: 'procesos', component: ProcesosComponent, canActivate: [AuthGuard] }, // Ruta para /procesos
  { path: 'investigacion', component: InvestigacionComponent, canActivate: [AuthGuard] }, // Ruta para /investigacion
  { path: 'innovacion', component: InnovacionComponent, canActivate: [AuthGuard] }, // Ruta para /innovacion


];