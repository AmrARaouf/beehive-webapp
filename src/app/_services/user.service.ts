import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';

import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable()
export abstract class UserService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  protected storeUserObject(key: string, user: Object): void {
    localStorage.setItem(key, JSON.stringify(user));
  }

  protected loadUserObject(key: string): Object {
    return JSON.parse(localStorage.getItem(key));
  }
}
