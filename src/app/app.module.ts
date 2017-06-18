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
import { BusinessSignupComponent } from './business-signup/business-signup.component'

import { WorkerService } from './worker.service'
import { ProjectService } from './project.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    BusinessSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [
    WorkerService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
