import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styles: []
})

export class ProjectCreateComponent {  
  // constructor(
  //   private projectService: ProjectService,
  //   private router: Router) { }

  title = 'Add Project';
  project: Project = {
    name: '',
    description: '',
    label_names: '',
    pakage_name: ''
  };

  onAdd(): void {
    //if (this.projectService == null)
      this.project.name += "a"; 
    //else
      //this.projectService.create(this.project);
  }
}
