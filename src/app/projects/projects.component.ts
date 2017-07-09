import { Component, OnInit } from '@angular/core';

import { ProjectService } from '@app/services/project.service';

import { Project } from '@app/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  getProjects(): void {
    this.projectService
    .getProjects()
    .then(projects => {this.projects = projects; console.log(projects)});
  }

  ngOnInit(): void {
    this.getProjects();
  }
}