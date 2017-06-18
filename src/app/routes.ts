import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { WorkerSignupComponent } from './worker-signup/worker-signup.component'
import { ProjectCreateComponent } from './project-create/project-create.component'

export const ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'worker/signup', component: WorkerSignupComponent },
  { path: 'worker/createproject', component: ProjectCreateComponent }
];