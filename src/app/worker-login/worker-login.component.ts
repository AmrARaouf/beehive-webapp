import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../_services/worker.service';
import { UserCredentials } from '../models';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styles: []
})
export class WorkerLoginComponent {
  userCredentials: UserCredentials = {
    email: '',
    password: ''
  }

  constructor(private workerService: WorkerService) { }

  login(): void {
    this.workerService.login(this.userCredentials).then();
  }
}
