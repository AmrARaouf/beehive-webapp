import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project, Image, Package } from '@app/models';
import { ProjectService } from '@app/_services/project.service';
import { ImageService } from '@app/_services/image.service';
import { PackageService } from '@app/_services/package.service';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {  
  constructor(
    private projectService: ProjectService,
    private imageService: ImageService,
    private packageService: PackageService,
    private router: Router) { }

  private numberOfTabs = 6;
  activeTab: number = 1;
  datasetFileName: string;

  project: Project;
  // TODO: update html to get packages from this,
  packages: Package[];
  images: Image[];
  imageIds: string[];
  items: string[] = ['Person','Car'];

  ngOnInit(): void {
    this.project = this.projectService.initializeProject();
    this.packageService.getPackages().then(packages => {
      this.packages = packages
    });
  }

  onSelect(): void {
    console.log(this.items);
  }
    
  nextTab(): void {
    if (this.activeTab < this.numberOfTabs) {
      this.activeTab++;
    }
    if (this.activeTab+1 == this.numberOfTabs) {
      // Upload all images and get their ids,
      for (var image of this.images) {
        this.imageService.create(image).then(res => this.imageIds.push(res._id));
      }
      // Once all images are uploaded to database, create project,
      this.project.images = this.imageIds;
      this.projectService.create(this.project).then(res => this.router.navigate(['/project-detail']))
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
      // TODO: Populate images array here,
    }
  }

}
