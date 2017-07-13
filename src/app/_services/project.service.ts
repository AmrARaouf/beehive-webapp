import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Package } from '@app/models';
import { environment } from '@env/environment';

@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private projectsUrl = environment.apiUrl + '/projects';  // URL to web api
  private projects = [];

  constructor(private http: Http) { }

  initializeProject(): Project {
    return <Project> {
      name: '',
      description: '',
      label_names: [],
      package: <Package> {
        name: '',
        max_storage: 0
      }
    }
  }

  create(project: Project): Promise<Project> {
    return this.http
      .post(this.projectsUrl, JSON.stringify({
          name: project.name,
          description: project.description,
          label_names: [project.label_names],
          package: project.package
        }), this.options)
      .toPromise()
      .then(res => res.json().data as Project)
      .catch(this.handleError);
  }

  getProjects(): Promise<Project[]> {
    return this.http
      .get(this.projectsUrl, this.options)
      .toPromise()
      .then(res => {this.projects = res.json().projects;
                    return res.json().projects as Project[]})
  }

  getProject(projectId: string): Promise<Project> {
    var project = this.projects.find(project => project._id == projectId)
    if(project) {
      return new Promise<Project>((resolve, reject) => {
        resolve(project);
      });
    } else {
      return this.http
      .get(`${this.projectsUrl}/${projectId}`, this.options)
      .toPromise()
      .then(res => res.json().project as Project)
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}