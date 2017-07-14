import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Package } from '@app/models';
import { environment } from '@env/environment';
import { UserService } from './user.service';

@Injectable()
export class ProjectService extends UserService {

  private projectsUrl = this.baseUrl + '/projects';  // URL to web api
  private projects = [];

  constructor(private http: Http) {
    super(http);
  }

  initializeProject(): Project {
    return <Project> {
      name: '',
      description: '',
      label_names: [],
      package: '',
      images: []
    }
  }

  create(project: Project): Promise<Project> {
    return this.http
      .post(this.projectsUrl, JSON.stringify({
          name: project.name,
          description: project.description,
          label_names: [project.label_names],
          package: project.package,
          images: [project.images]
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
}