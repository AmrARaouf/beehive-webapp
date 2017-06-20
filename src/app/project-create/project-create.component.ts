import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Project } from './../models';
import { ProjectService } from './../services/project.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent  {  
  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  private numberOfTabs = 6;
  activeTab: number = 4;

  project: Project = {
    name: '',
    description: '',
    label_names: '',
    package: ''
  };
  
  nextTab(): void {
    if (this.activeTab < this.numberOfTabs) {
      this.activeTab++;
    }
  }

  previousTab(): void {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
  }
}
