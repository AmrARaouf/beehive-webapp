import { Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component'
import { BusinessSignupComponent } from '@app/business-signup/business-signup.component'
import { BusinessLoginComponent } from '@app/business-login/business-login.component'
import { ProjectCreateComponent } from '@app/project-create/project-create.component'
import { ProjectsComponent } from '@app/projects/projects.component'

import { WorkerHomeComponent } from '@app/worker-home/worker-home.component'
import { WorkerSignupComponent } from '@app/worker-signup/worker-signup.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business/signup', component: BusinessSignupComponent },
  { path: 'business/login', component: BusinessLoginComponent },
  { path: 'worker/signup', component: WorkerSignupComponent },
  { path: 'worker', component: WorkerHomeComponent },
  { path: 'business/new-project', component: ProjectCreateComponent },
  { path: 'project/projects', component: ProjectsComponent }
];