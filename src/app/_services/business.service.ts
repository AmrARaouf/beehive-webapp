import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BusinessUser, BusinessUserCredentials } from '@app/models'
import { UserService } from '@app/_services/user.service'


@Injectable()
export class BusinessService extends UserService {
  private business: BusinessUser;

  constructor(private http: Http) {
    super(http)
  }

  signup(businessUser: BusinessUser): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}/business/signup`, JSON.stringify(businessUser), this.authOptions)
      .toPromise()
      .then(response => this.handleUserAuthentication(response.json() as BusinessUser))
      .catch(this.handleError);
  }

  login(businessUserCredentials: BusinessUserCredentials): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}/business/login`, JSON.stringify(businessUserCredentials), this.authOptions)
    .toPromise()
    .then(response => this.handleUserAuthentication(response.json() as BusinessUser))
    .catch(this.handleError)
  }

  getCurrentUser(): BusinessUser {
    return this.business;
  }

  private handleUserAuthentication(business: BusinessUser): BusinessUser {
    this.business = business
    return this.business
  }
}
