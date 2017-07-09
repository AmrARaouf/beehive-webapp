import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { ProjectService } from '@app/_services/project.service';

import { Project } from '@app/models';

@Component({
  selector: 'projects',
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

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.router.navigate(['projects', this.selectedProject._id]);
  }

  ngOnInit(): void {
    this.getProjects();
  }
}