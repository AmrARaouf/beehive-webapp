import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { BusinessSignupComponent } from './business-signup/business-signup.component'
import { BusinessLoginComponent } from './business-login/business-login.component'
import { WorkerSignupComponent } from './worker-signup/worker-signup.component'
import { ProjectCreateComponent } from './project-create/project-create.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business/signup', component: BusinessSignupComponent },
  { path: 'business/login', component: BusinessLoginComponent },
  { path: 'worker/signup', component: WorkerSignupComponent },
  { path: 'worker/createproject', component: ProjectCreateComponent }
];