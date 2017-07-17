import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Annotation } from '@app/models';
import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable()
export class AnnotationService extends BaseService {
  private annotationsUrl = this.baseUrl + '/annotations';

  constructor(private http: Http) {
    super(http);
  }

  createAnnotation(workerId: string, imageId: string, annotation: Annotation) {
    var payload = {
      workerId: workerId,
      imageId: imageId,
      annotation: annotation
    }

    return this.http
      .post(this.annotationsUrl, JSON.stringify(payload), this.authOptions)
      .toPromise()
      .then( res => console.log("create annotation service successful: ", res) )
      .catch(this.handleError);
  }

}
