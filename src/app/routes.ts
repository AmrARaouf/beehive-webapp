import { Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component'
import { BusinessSignUpComponent } from '@app/business-signup/business-signup.component'
import { BusinessLoginComponent } from '@app/business-login/business-login.component'
import { ProjectCreateComponent } from '@app/project-create/project-create.component'
import { ProjectsComponent } from '@app/projects/projects.component'
import { ProjectDetailComponent } from '@app/project-detail/project-detail.component'


import { WorkerHomeComponent } from '@app/worker-home/worker-home.component'
import { WorkerSignupComponent } from '@app/worker-signup/worker-signup.component'
import { WorkerLoginComponent } from '@app/worker-login/worker-login.component'
import { WorkerTutorialComponent } from '@app/worker-tutorial/worker-tutorial.component'
import { WorkerTagComponent } from '@app/worker-tag/worker-tag.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business/signup', component: BusinessSignUpComponent },
  { path: 'business/login', component: BusinessLoginComponent },

  { path: 'worker/signup', component: WorkerSignupComponent },
  { path: 'worker/login', component: WorkerLoginComponent },
  
  { path: 'worker', component: WorkerHomeComponent },
  { path: 'worker/tutorial', component: WorkerTutorialComponent },
  { path: 'worker/tag', component: WorkerTagComponent },

  { path: 'projects/new-project', component: ProjectCreateComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent }
];