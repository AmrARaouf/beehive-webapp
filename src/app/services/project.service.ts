import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Project } from '@app/models';
import { environment } from '@env/environment';

@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private projectsUrl = environment.apiUrl + '/project/projects';  // URL to web api

  constructor(private http: Http,
              private router: Router) { }

  create(project: Project): Promise<Project> {
    return this.http
      .post(this.projectsUrl, JSON.stringify({
          name: project.name,
          description: project.description,
          label_names: [project.label_names],
          package: project.package
        }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Project)
      .catch(this.handleError);
  }

  getProjects(): Promise<Project[]> {
    return this.http
      .get(this.projectsUrl, this.options)
      .toPromise()
      .then(res => res.json().data as Project[])
      .catch(this.handleError)
  } 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}