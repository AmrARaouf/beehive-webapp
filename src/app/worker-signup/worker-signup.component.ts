import { Component, OnInit } from '@angular/core';

import { WorkerUser } from '@app/models';

@Component({
  selector: 'app-worker-signup',
  templateUrl: './worker-signup.component.html',
  styles: []
})
export class WorkerSignupComponent{

user: WorkerUser = {
    firstName: '',
    lastName: '',
    Username: '',
    email: '',
    phone: '',
    password: ''
  };
}
