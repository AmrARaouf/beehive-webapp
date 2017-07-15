import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project, Image, Package } from '@app/models';
import { ProjectService } from '@app/_services/project.service';
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
    private packageService: PackageService,
    private router: Router) { }

  private numberOfTabs = 6;
  private createText = 'Create';
  private nextText = 'Next';
  activeTab: number = 1;
  datasetFileName: string;
  tutorialFileName: string;
  nextButtonText: string;

  project: Project;
  // TODO: update html to get packages from this,
  packages: Package[];
  
  items: string[] = ['Person','Car'];

  ngOnInit(): void {
    this.nextButtonText = 'Next';
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
      if (this.activeTab == this.numberOfTabs)
        this.nextButtonText = this.createText;
    }
    else {
      this.project.labelNames = this.items;
      this.project.imagesPath = this.datasetFileName;
      this.project.tutorialPath = this.tutorialFileName;
      this.projectService.create(this.project).then(res => this.router.navigate(['/project-detail']))
    }
  }

  previousTab(): void {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
    this.nextButtonText = this.nextText;
  }

  onBronzePack(): void {
    this.project.package = this.packages[0]._id;
    this.nextTab();
  }

  onSilverPack(): void {
    this.project.package = this.packages[1]._id;
    this.nextTab();
  }

  onGoldPack(): void {
    this.project.package = this.packages[2]._id;
    this.nextTab();
  }

  onDatasetUploadOutput(output: UploadOutput): void {
    if (output.file) {
      this.datasetFileName = output.file.name;
    }
  }

  onTutorialUpload(output: UploadOutput): void {
    if (output.file) {
      this.tutorialFileName = output.file.name;
    }
  }
}
