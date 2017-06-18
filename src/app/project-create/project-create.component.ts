import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Project } from './../models';
import { ProjectService } from './../services/project.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styles: []
})

export class ProjectCreateComponent  {  
  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  title = 'Add Project';
  project: Project = {
    name: '',
    description: '',
    label_names: '',
    pakage_name: ''
  };
  // ngOnInit(): void {
    
  // }
  onAdd(): void {
          this.projectService.create(this.project);
  }
}