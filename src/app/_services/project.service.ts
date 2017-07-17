import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Package, Activity } from '@app/models';
import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable()
export class ProjectService extends BaseService {

  private projectsUrl = this.baseUrl + '/projects';  // URL to web api
  private projects = [];

  constructor(private http: Http) {
    super(http);
  }

  initializeProject(): Project {
    return <Project> {
      name: '',
      description: '',
      labelNames: [],
      numberOfAnnotations: 0,
      images: [],
      package: <Package> {
        name: '',
        maxStorage: 0
      }
    }
  }

  createProject(project: Project): Promise<Project> {
    return this.http
      .post(this.projectsUrl, JSON.stringify(project), this.authOptions)
      .toPromise()
      .then(res => res.json() as Project)
      .catch(this.handleError);
  }

  getProjects(): Promise<Project[]> {
    return this.http
      .get(this.projectsUrl, this.authOptions)
      .toPromise()
      .then(res => {this.projects = res.json().projects;
                    return res.json().projects as Project[]})
  }

  getProject(projectId: string): Promise<Project> {
    var project = this.projects.find(project => project._id == projectId)
    if (project) {
      return new Promise<Project>((resolve, reject) => {
        resolve(project);
      });
    } else {
      return this.http
      .get(`${this.projectsUrl}/${projectId}`, this.authOptions)
      .toPromise()
      .then(res => res.json().project as Project)
    }
  }

  getProjectActivities(projectId: string): Promise<Activity[]> {
    return this.http
      .get(`${this.projectsUrl}/${projectId}/activities`, this.authOptions)
      .toPromise()
      .then(res => res.json().activities as Activity[])
  }

    getProjectActivity(projectId: string, activityId: string): Promise<Activity> {
    return this.http
      .get(`${this.projectsUrl}/${projectId}/activities/${activityId}`, this.authOptions)
      .toPromise()
      .then(res => res.json().activities as Activity)

    }

  dispatchProject(): Promise<Project> {
    return this.http
    .get(`${this.projectsUrl}/dispatch`, this.options)
    .toPromise()
    .then(res => res.json() as Project)
  }
}