import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkerService } from '@app/_services/worker.service';
import { WorkerUser, Rank } from '@app/models';

@Component({
  selector: 'app-worker-signup',
  templateUrl: './worker-signup.component.html',
  styles: []
})
export class WorkerSignupComponent {
  // TODO: Get this from database,
  newRank: Rank = {
    title: 'Beginner',
    maxPoints: 10,
    icon: ''
  }

  user: WorkerUser = {
    username: '',
    email: '',
    password: '',
    points: 0,
    rank: this.newRank,
    credit: 0,
    isReviewer: false,
    totalAnnotationsCount: 0,
    currentPayableCredit: 0,
    isActivated: true
  };

  constructor(private workerService: WorkerService,
              private router: Router) { }

  signup(): void {
    console.log("here")
    this.workerService.signup(this.user).then(user  => {
      this.router.navigate(['/worker']);
    });
  }
}
