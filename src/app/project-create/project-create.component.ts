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

  project: Project = {
    name: '',
    description: '',
    label_names: '',
    package: ''
  };
  // ngOnInit(): void {
    
  // }
  onAdd(): void {
    if (this.project.package == "Bronze")
      this.project.package = "5946b1401218e35774c7c753";
    else if (this.project.package == "Silver")
      this.project.package = "5946b1491218e35774c7c754";
    else if (this.project.package == "Gold")
      this.project.package = "5946b1581218e35774c7c755";
    else if (this.project.package == "Diamond")
      this.project.package = "5946b1581218e35774c7c756";
    else 
      this.project.package = "5946b12d1218e35774c7c753";
    this.projectService.create(this.project);
  }
}
