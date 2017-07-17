import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '@app/_services/project.service';

import { Project, Activity } from '@app/models';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styles: []
})
export class ProjectDetailComponent {
    project: Project;
    activities: ActivityModel[];
    selectedActivity: ActivityModel;

    constructor(private projectService: ProjectService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.project = this.projectService.initializeProject();
        this.activatedRoute.params.subscribe((params: Params) => {
            let projectId = params['id'];
            this.projectService.getProject(projectId).then(project => {
                this.project = project;
                // console.log(this.project);
                // Populate data for charts,
                this.imageLabels = Array(0);
                this.imageAnnotationCount = Array(0);
                var notLabelled = 0;
                this.project.images.forEach((item, index) => {
                    if (item.annotations.length == 0)
                        notLabelled++;
                    else {
                        this.imageLabels.push('Image ' + (index+1).toString());
                        this.imageAnnotationCount.push(item.annotations.length);
                    }
                });
                this.imageLabels.push('Not Labelled');
                this.imageAnnotationCount.push(notLabelled);
                this.projectService.getProjectActivities(this.project._id).then(activities => {
                    this.activities = Array(0);
                    activities.forEach((item, index) => this.activities.push(<ActivityModel> { id:index+1, activity: item}));
                });
            });
        });
    }

    onChange(activity) : void {
        this.selectedActivity = this.activities[activity-1];
    }

  public imageLabels : string[];
  public imageAnnotationCount : number[];
  public labels : string[];
  public labelCount : number[];
  public chartType : string = 'doughnut';
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}

export class ActivityModel
{
    id: number;
    activity: Activity;
}