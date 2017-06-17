import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
