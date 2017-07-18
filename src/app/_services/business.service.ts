import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BusinessUser, BusinessUserCredentials } from '@app/models'
import { UserService } from '@app/_services/user.service'


@Injectable()
export class BusinessService extends UserService {
  private business: BusinessUser;
  private storageKey = "beehive_business_user";

  constructor(private http: Http) {
    super(http)
    this.loadBusinessUser()
  }

  signup(businessUser: BusinessUser): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}/business/signup`, JSON.stringify(businessUser), this.authOptions)
      .toPromise()
      .then(response => this.handleUserAuthentication(response.json().user as BusinessUser))
      .catch(this.handleError);
  }

  login(businessUserCredentials: BusinessUserCredentials): Promise<BusinessUser> {
    return this.http.post(`${this.baseUrl}/business/login`, JSON.stringify(businessUserCredentials), this.authOptions)
    .toPromise()
    .then(response => this.handleUserAuthentication(response.json().user as BusinessUser))
    .catch(this.handleError)
  }

  getCurrentUser(): BusinessUser {
    return this.business;
  }

  private loadBusinessUser(): void {
    var businessObject = this.loadUserObject(this.storageKey);
    if (businessObject) {
      this.business = <BusinessUser>businessObject;
    }
  }

  private handleUserAuthentication(business: BusinessUser): BusinessUser {
    this.business = business;
    this.storeUserObject(this.storageKey, business);
    return this.business;
  }
}
