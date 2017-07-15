import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '@app/_services/project.service';

import { Project, Activity } from '@app/models';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
    project: Project;
    activities: ActivityModel[];
    selectedActivity: ActivityModel;

    constructor(private projectService: ProjectService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // this.activityIds.push(1);
        // this.activityIds.push(2);
        // this.project = this.projectService.initializeProject();
        // this.activatedRoute.params.subscribe((params: Params) => {
        //     let projectId = params['id'];
        //     this.projectService.getProject(projectId).
        // TODO: Get project from the id,
        this.projectService.getProject('5946e90a1f393415a4055395').then(project => {
            this.project = project;
            this.projectService.getProjectActivities(this.project._id).then(activities => {
                this.activities = Array(0);
                activities.forEach((item, index) => this.activities.push(<ActivityModel> { id:index+1, activity: item}));
                console.log(this.activities);
            });
        });
    }

    onChange(activity) : void {
        this.selectedActivity = this.activities[activity-1];
    }
}

export class ActivityModel
{
    id: number;
    activity: Activity;
}