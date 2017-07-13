import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../_services/worker.service';
import { WorkerUser, Rank } from '../models';

@Component({
  selector: 'app-worker-signup',
  templateUrl: './worker-signup.component.html',
  styles: []
})
export class WorkerSignupComponent {
  // TODO: Get this from database,
  newRank: Rank = {
    title: 'Beginner',
    max_points: 10,
    icon: ''
  }

  user: WorkerUser = {
    username: '',
    email: '',
    password: '',
    points: 0,
    rank: this.newRank,
    credit: 0,
    is_reviewer: false,
    total_annotations_count: 0,
    current_payable_credit: 0,
    is_activated: true
  };

  constructor(private workerService: WorkerService) { }

  signup(): void {
    this.workerService.signup(this.user).then();
  }
}
