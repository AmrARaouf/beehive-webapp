import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project'
@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styles: []
})

export class ProjectCreateComponent implements OnInit {
  constructor() { }
  @Input() project : Project;
  ngOnInit() {
    this.project = new Project();
    this.project.name = "abc";
  }
}
