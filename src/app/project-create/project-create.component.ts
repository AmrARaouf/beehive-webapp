import { Component, Input } from '@angular/core';
 import { Project } from './project'


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styles: []
})

export class ProjectCreateComponent {
  title = 'Add Project';
  project: Project = {
    name: '',
    description: '',
    label_names: '',
    pakage_name: ''
  };

    onAdd(): void {
    // TODO: save project on server,
  }
}
