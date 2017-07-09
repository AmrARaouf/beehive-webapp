import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagInputModule } from 'ng2-tag-input';
import { NgUploaderModule } from 'ngx-uploader';

import { ROUTES } from './routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { WorkerLoginComponent } from './worker-login/worker-login.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectsComponent } from './projects/projects.component';
import { BusinessSignupComponent } from './business-signup/business-signup.component';
import { BusinessLoginComponent } from './business-login/business-login.component'

import { WorkerService } from './services/worker.service'
import { BusinessService } from './services/business.service'
import { ProjectService } from './services/project.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkerHomeComponent } from './worker-home/worker-home.component';
import { WorkerTutorialComponent } from './worker-tutorial/worker-tutorial.component';
import { WorkerTagComponent } from './worker-tag/worker-tag.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    ProjectsComponent,
    BusinessSignupComponent,
    BusinessLoginComponent,
    NavbarComponent,
    WorkerHomeComponent,
    WorkerTutorialComponent,
    WorkerTagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    NgUploaderModule
  ],
  providers: [
    WorkerService,
    BusinessService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
