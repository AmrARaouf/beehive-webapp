import { Component, OnInit } from '@angular/core';
import { AnnotoriousComponent } from '@app/worker-tag/annotorious.component'
import { Label, Project } from '@app/models'
import { ProjectService } from '@app/_services/project.service'


@Component({
  selector: 'app-tag-game',
  templateUrl: './worker-tag.component.html',
  styles: []
})
export class WorkerTagComponent implements OnInit {
  private project: Project;
  private currentImageIndex: number;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.currentImageIndex = 0;
    this.projectService.dispatchProject().then( project => this.project = project );
  }

  onNewLabel(label: Label): void {
    console.log("new label in WorkerTagComponent: ", label)
  }

  onNextClick(): void {
    var imageArrayLength = this.project.images.length;
    this.currentImageIndex = (this.currentImageIndex + 1) % length;
  }

}
