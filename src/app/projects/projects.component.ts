import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { ProjectService } from '@app/services/project.service';

import { Project } from '@app/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService,
              private router: Router) { }

  getProjects(): void {
    this.projectService
    .getProjects()
    .then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }
}