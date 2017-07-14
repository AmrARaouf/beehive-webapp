import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Package } from '@app/models';
import { environment } from '@env/environment';
import { UserService } from './user.service';

@Injectable()
export class PackageService extends UserService {

  private url = this.baseUrl + '/business/packages';  // URL to web api
  private packages = [];

  constructor(private http: Http) {
    super(http);
  }

    getPackages(): Promise<Package[]> {
        return this.http
            .get(this.url, this.options)
            .toPromise()
            .then(res => {
                // TODO: Do we need the next line?,
                this.packages = res.json().packages;
                return res.json().packages as Package[]
            })
    }
}