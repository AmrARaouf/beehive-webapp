import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagInputModule } from 'ng2-tag-input';

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
import { ProjectService } from './services/project.service';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    BusinessSignupComponent,
    BusinessLoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    WorkerService,
    BusinessService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
