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

  private numberOfTabs = 5;
  private createText = 'Create';
  private nextText = 'Next';
  activeTab: number = 1;
  datasetFileName: string;
  tutorialFileName: string;
  nextButtonText: string;
  annotators: number[] = [1, 2, 3, 4];
 
  project: Project;
  // TODO: update html to get packages from this,
  packages: Package[];
  
  items: string[] = [];

  ngOnInit(): void {
    console.log(this.annotators);
    this.nextButtonText = 'Next';
    this.project = this.projectService.initializeProject();
    this.packageService.getPackages().then(packages => {
      this.packages = packages
    });
  }
  
  onSelect(): void {
    console.log(this.items);
  }
  
  onChange(annotator) : void {
    this.project.numberOfAnnotations = annotator;
  }
  
  onTabChange(tabIndex) : void {
    console.log(tabIndex);
    this.activeTab = tabIndex;
    if (this.activeTab == this.numberOfTabs)
      this.nextButtonText = this.createText;
    else
      this.nextButtonText = this.nextText;
  }
  nextTab(): void {
    if (this.activeTab < this.numberOfTabs) {
      this.activeTab++;
      if (this.activeTab == this.numberOfTabs)
        this.nextButtonText = this.createText;
    }
    else {
      console.log(this.project);
      this.project.labelNames = this.items;
      this.projectService.createProject(this.project)
      .then(res => {
        console.log(res)
        this.router.navigate(['/projects', res._id])})
    }
  }

  previousTab(): void {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
    this.nextButtonText = this.nextText;
  }

  onPackageSelect(id) : void {
    this.project.package = this.packages[id];
    console.log(this.project.package);
    this.nextTab();
  }

  onDatasetUploadOutput(output: UploadOutput): void {
    if (output.file) {
      this.datasetFileName = output.file.name;
      this.project.imagesPath = this.datasetFileName;
    }
  }

  onTutorialUpload(output: UploadOutput): void {
    if (output.file) {
      this.tutorialFileName = output.file.name;
      this.project.tutorialPath = this.tutorialFileName;
    }
  }
}
