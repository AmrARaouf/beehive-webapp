import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { BusinessUser } from './../models'
import { BusinessLoginComponent } from './../business-login/business-login.component'

@Injectable()
export class BusinessService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = environment.apiUrl;

  constructor(private http: Http) {

  }

  signup(businessUser: BusinessUser): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}business/users`, JSON.stringify(businessUser))
      .toPromise()
      .then(response => response.json().data as BusinessUser);
  }

  login(businessCredentials: BusinessLoginComponent): Promise<BusinessLoginComponent> {
    return this.http.post(`${this.baseUrl}business/login`, JSON.stringify(businessCredentials))
      .toPromise()
      .then(response => response.json().data as BusinessLoginComponent);
  }
}
