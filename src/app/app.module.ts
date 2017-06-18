import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { ROUTES } from './routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { WorkerLoginComponent } from './worker-login/worker-login.component';

import { WorkerService } from './worker.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    WorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
