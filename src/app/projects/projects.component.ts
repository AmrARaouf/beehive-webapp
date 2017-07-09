import { Component, OnInit } from '@angular/core';

import { ProjectService } from '@app/services/project.service';

import { Project } from '@app/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }
}