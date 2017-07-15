import { Component, OnInit } from '@angular/core';

import { WorkerService } from '@app/_services/worker.service'
import { WorkerUser } from '@app/models'

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styles: []
})
export class WorkerHomeComponent implements OnInit {

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    var currUser: WorkerUser = this.workerService.getCurrentUser()
    console.log("current user: ", currUser)
  }

}
