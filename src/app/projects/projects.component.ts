import { Component, OnInit } from '@angular/core';

import { ProjectService } from '.././services/project.service';

import { Project } from '.././models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }
}