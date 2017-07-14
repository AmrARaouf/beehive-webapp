import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from '@app/models';
import { environment } from '@env/environment';
import { UserService } from './user.service';

@Injectable()
export class ImageService extends UserService {

  private url = this.baseUrl + '/images';  // URL to web api

  constructor(private http: Http) {
    super(http);
  }

  create(image: Image): Promise<Image> {
    return this.http
      .post(this.url, JSON.stringify({
          path: image.path,
        }), this.options)
      .toPromise()
      .then(res => res.json().data as Image)
      .catch(this.handleError);
  }

    getImages(): Promise<Image[]> {
        return this.http
            .get(this.url, this.options)
            .toPromise()
            .then(res => {
                return res.json().data as Image[]
            })
    }
}