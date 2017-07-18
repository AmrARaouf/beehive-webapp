import { Component, OnInit } from '@angular/core';
import { WorkerService } from '@app/_services/worker.service'
import { WorkerUser, Rank } from '@app/models'
import { RankService } from '@app/_services/rank.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styles: []
})
export class WorkerHomeComponent implements OnInit {

  private workerUser: WorkerUser;
  private ranks: Rank[];

  constructor(private workerService: WorkerService,
  	private rankService: RankService) { }

  ngOnInit() {
    this.workerUser = this.workerService.getCurrentUser();
    this.rankService.getRanks().then(ranks => this.ranks = ranks);
    console.log(this.workerUser);
    console.log(this.ranks);
  }


}
