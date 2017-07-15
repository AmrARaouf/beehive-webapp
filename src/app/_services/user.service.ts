import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';

import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable()
export abstract class UserService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  protected storeUserObject(user: Object): void {
    localStorage.setItem("beehive_user", JSON.stringify(user));
  }

  protected loadUserObject(): Object {
    return JSON.parse(localStorage.getItem("beehive_user"));
  }
}
