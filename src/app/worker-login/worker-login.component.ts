import { Component, OnInit } from '@angular/core';

import { WorkerService } from '@app/_services/worker.service';
import { WorkerUserCredentials } from '@app/models';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styles: []
})
export class WorkerLoginComponent {
 userCredentials: WorkerUserCredentials = {
    Username: '',
    password: ''
  }
    constructor(private workerService: WorkerService) { }

  login(): void {
    this.workerService.login(this.userCredentials).then();
  }


}
