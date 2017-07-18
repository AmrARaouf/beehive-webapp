import { Component, OnInit } from '@angular/core';
import { AnnotoriousComponent } from '@app/worker-tag/annotorious.component'
import { Label, Project, Annotation } from '@app/models'
import { ProjectService } from '@app/_services/project.service'
import { AnnotationService } from '@app/_services/annotation.service'
import { WorkerService } from '@app/_services/worker.service'


@Component({
  selector: 'app-worker-tag',
  templateUrl: './worker-tag.component.html',
  styleUrls: ['./worker-tag.component.css']
})
export class WorkerTagComponent implements OnInit {
  private project: Project;
  private imageIndex: number;
  private labels: Label[];

  constructor(private projectService: ProjectService,
              private annotationService: AnnotationService,
              private workerService: WorkerService) { }

  ngOnInit() {
    this.labels = [];
    this.projectService.dispatchProject().then( project => {
      this.project = project;
      this.imageIndex = 0;
    });
  }

  onNewLabel(label: Label): void {
    this.labels.push(label);
  }

  onNextClick(): void {
    var workerId = this.workerService.getCurrentUser()._id;
    var imageId = this.project.images[this.imageIndex]._id;
    var annotation = <Annotation>{
      labels: this.labels
    };
    this.labels = [];
    this.annotationService.createAnnotation(workerId, imageId, annotation);
    this.imageIndex = (this.imageIndex + 1) % this.project.images.length;
  }

  onSkipClick(): void {
    this.imageIndex = (this.imageIndex + 1) % this.project.images.length;
  }

}
