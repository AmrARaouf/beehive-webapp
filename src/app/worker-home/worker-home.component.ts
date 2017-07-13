import { Component, OnInit } from '@angular/core';

import { WorkerService } from '@app/_services/worker.service'

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styles: []
})
export class WorkerHomeComponent implements OnInit {

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    console.log(this.workerService.getCurrentUser())
  }

}
