import { Component, OnInit } from '@angular/core';
import { WorkerService } from '@app/_services/worker.service';
import { WorkerUserCredentials } from '@app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styles: []
})
export class WorkerLoginComponent {
  userCredentials: WorkerUserCredentials = {
    username: '',
    password: ''
  }
  
  constructor(private workerService: WorkerService,
              private router: Router) { }

  login(): void {
    this.workerService.login(this.userCredentials).then(user  => {
      this.router.navigate(['/worker']);
    });
  }
}