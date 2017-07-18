import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Annotation } from '@app/models';
import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable()
export class AnnotationService extends BaseService {
  private annotationsUrl = this.baseUrl + '/annotation';

  constructor(private http: Http) {
    super(http);
  }

  createAnnotation(workerId: string, imageId: string, annotation: Annotation): Promise<Annotation> {
    var payload = {
      workerId: workerId,
      imageId: imageId,
      annotation: annotation
    }
    return this.http
      .post(this.annotationsUrl, JSON.stringify(payload), this.authOptions)
      .toPromise()
      .then( res => res.json() as Annotation )
      .catch(this.handleError);
  }

}
