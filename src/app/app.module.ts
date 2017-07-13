import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagInputModule } from 'ng2-tag-input';
import { NgUploaderModule } from 'ngx-uploader';

import { ROUTES } from '@app/routes'
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/home/home.component';
import { WorkerSignupComponent } from '@app/worker-signup/worker-signup.component';
import { WorkerLoginComponent } from '@app/worker-login/worker-login.component';
import { ProjectCreateComponent } from '@app/project-create/project-create.component';
import { ProjectsComponent } from '@app/projects/projects.component';
import { ProjectDetailComponent } from '@app/project-detail/project-detail.component';
import { BusinessContactUsComponent } from '@app/business-contactus/business-contactus.component';
import { BusinessLoginComponent } from '@app/business-login/business-login.component'

import { WorkerService } from '@app/_services/worker.service'
import { BusinessService } from '@app/_services/business.service'
import { ProjectService } from '@app/_services/project.service';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { WorkerHomeComponent } from '@app/worker-home/worker-home.component';
import { WorkerTutorialComponent } from '@app/worker-tutorial/worker-tutorial.component';
import { WorkerTagComponent } from '@app/worker-tag/worker-tag.component';
import { AnnotoriousDirective } from '@app/_directives/annotorious.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    BusinessContactUsComponent,
    BusinessLoginComponent,
    NavbarComponent,
    WorkerHomeComponent,
    WorkerTutorialComponent,
    WorkerTagComponent,
    AnnotoriousDirective
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
