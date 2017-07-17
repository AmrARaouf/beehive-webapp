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
  private currentImageIndex: number;

  private images: string[];
  private labels: Label[];

  constructor(private projectService: ProjectService,
              private annotationService :AnnotationService,
              private workerService :WorkerService) { }

  ngOnInit() {
    this.currentImageIndex = 0;
    this.images = [
      'https://www.extremetech.com/wp-content/uploads/2011/07/cars-driving.jpg',
      'https://s.yimg.com/uu/api/res/1.2/MZ.pGs0yYprt43ZfrjwEHg--/aD00ODA7dz03MjA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/cms/autos/Boldride/goodguys-autocross.jpg',
      'https://www.wired.com/images_blogs/autopia/2009/11/line-o-cars.jpg',
      'http://pictures2.autotrader.co.uk/imgser-uk/servlet/media.jpg?id=9d3b51ab4999426dbb3a542884538a1b&width=1024&height=768',
      'https://www.trafficsafetystore.com/blog/wp-content/uploads/self-driving-cars-hacking.jpg'
    ];
    this.projectService.dispatchProject().then( project => this.project = project );
  }

  onNewLabel(label: Label): void {
    this.labels.push(label);
    console.log("new label in WorkerTagComponent: ", label)
  }

  onNextClick(): void {
    var workerId = this.workerService.getCurrentUser()._id;
    var imageId = this.project.images[this.currentImageIndex]._id;
    var annotation = <Annotation>{
      labels: this.labels
    };
    this.labels = [];
    this.annotationService.createAnnotation(workerId, imageId, annotation);
    // TODO: change to this.project.images
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  onSkipClick(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

}
