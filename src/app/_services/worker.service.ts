import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { environment } from '@env/environment';
import { WorkerUser, WorkerUserCredentials } from '@app/models'
import { WorkerLoginComponent } from '@app/worker-login/worker-login.component'

@Injectable()
export class WorkerService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private baseUrl = environment.apiUrl;

  constructor(private http: Http) { }

  signup(workerUser: WorkerUser): Promise<WorkerUser> {
    return this.http.post(`${this.baseUrl}worker/users`, JSON.stringify(workerUser), this.options)
      .toPromise()
      .then(response => response.json().data as WorkerUser)
      .catch(this.handleError);
  }

  login(workerUserCredentials: WorkerUserCredentials): Promise<WorkerUser> {
    return this.http.post(`${this.baseUrl}/worker/login`, JSON.stringify(workerUserCredentials), this.options)
    .toPromise()
    .then(response => response.json().data as WorkerUser)
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
