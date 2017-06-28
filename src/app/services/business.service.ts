import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Router }   from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { BusinessUser, BusinessUserCredentials } from './../models'
import { BusinessLoginComponent } from './../business-login/business-login.component'

@Injectable()
export class BusinessService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private baseUrl = environment.apiUrl;

  constructor(private http: Http,
              private router: Router) { }

  signup(businessUser: BusinessUser): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}business/users`, JSON.stringify(businessUser), this.options)
      .toPromise()
      .then(response => response.json().data as BusinessUser)
      .catch(this.handleError);
  }

  login(businessUserCredentials: BusinessUserCredentials): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}/business/login`, JSON.stringify(businessUserCredentials), this.options)
    .toPromise()
    .then(response => {
      response.json().data as BusinessUser;
      this.router.navigate(['/project/projects'])})
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
