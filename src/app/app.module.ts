import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ROUTES } from './routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { WorkerLoginComponent } from './worker-login/worker-login.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { BusinessSignupComponent } from './business-signup/business-signup.component';
import { BusinessLoginComponent } from './business-login/business-login.component'

import { WorkerService } from './services/worker.service'
import { BusinessService } from './services/business.service'
import { ProjectService } from './services/project.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    BusinessSignupComponent,
    BusinessLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [
    WorkerService,
    BusinessService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
