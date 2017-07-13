import { Component, OnInit } from '@angular/core';
import { AnnotoriousComponent } from '@app/worker-tag/annotorious.component'
import { Label } from '@app/models'


@Component({
  selector: 'app-tag-game',
  templateUrl: './worker-tag.component.html',
  styles: []
})
export class WorkerTagComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onNewLabel(label: Label): void {
    console.log("new label in WorkerTagComponent: ", label)
  }

}
