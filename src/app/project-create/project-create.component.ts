import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '@app/models';
import { ProjectService } from '@app/services/project.service';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {  
  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  private numberOfTabs = 6;
  activeTab: number = 1;
  datasetFileName: string;

  project: Project;
  
  items: string[] = ['Person','Car'];

  ngOnInit(): void {
    this.project = this.projectService.initializeProject();
  }

  onSelect(): void {
    console.log(this.items);
  }
    
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

  onDatasetUploadOutput(output: UploadOutput): void {
    if (output.file) {
      this.datasetFileName = output.file.name;
    }
  }

}
