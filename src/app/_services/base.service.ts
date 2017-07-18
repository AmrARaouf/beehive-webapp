import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';

import { environment } from '@env/environment';

@Injectable()
export abstract class BaseService {
  protected headers = new Headers({ 'Content-Type': 'application/json' });
  protected options = new RequestOptions({ headers: this.headers });
  protected authOptions = new RequestOptions({ headers: this.headers, withCredentials: true });
  protected baseUrl = environment.apiUrl;

  constructor(http: Http) { }
  
  protected handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  
}
