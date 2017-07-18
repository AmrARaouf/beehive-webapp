import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagInputModule } from 'ng2-tag-input';
import { NgUploaderModule } from 'ngx-uploader';
import { ChartsModule } from 'ng2-charts';

import { ROUTES } from '@app/routes'

import { WorkerService } from '@app/_services/worker.service'
import { BusinessService } from '@app/_services/business.service'
import { ProjectService } from '@app/_services/project.service';
import { WindowRefService } from '@app/_services/window-ref.service';
import { PackageService } from '@app/_services/package.service';
import { AnnotationService } from '@app/_services/annotation.service'
import { RankService } from '@app/_services/rank.service'

import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/home/home.component';
import { WorkerSignupComponent } from '@app/worker-signup/worker-signup.component';
import { WorkerLoginComponent } from '@app/worker-login/worker-login.component';
import { ProjectCreateComponent } from '@app/project-create/project-create.component';
import { ProjectsComponent } from '@app/projects/projects.component';
import { ProjectDetailComponent } from '@app/project-detail/project-detail.component';
import { BusinessSignUpComponent } from '@app/business-signup/business-signup.component';
import { BusinessLoginComponent } from '@app/business-login/business-login.component'

import { NavbarComponent } from '@app/navbar/navbar.component';
import { WorkerHomeComponent } from '@app/worker-home/worker-home.component';
import { WorkerTutorialComponent } from '@app/worker-tutorial/worker-tutorial.component';
import { WorkerTagComponent } from '@app/worker-tag/worker-tag.component';
import { AnnotoriousComponent } from '@app/worker-tag/annotorious.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    BusinessSignUpComponent,
    BusinessLoginComponent,
    NavbarComponent,
    WorkerHomeComponent,
    WorkerTutorialComponent,
    WorkerTagComponent,
    AnnotoriousComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    NgUploaderModule,
    ChartsModule
  ],
  providers: [
    WorkerService,
    BusinessService,
    ProjectService,
    WindowRefService,
    PackageService,
    AnnotationService,
    RankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
