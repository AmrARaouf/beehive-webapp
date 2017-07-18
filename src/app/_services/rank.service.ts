import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Rank } from '@app/models';
import { environment } from '@env/environment';


@Injectable()
export class RankService extends BaseService{
  private ranksUrl = this.baseUrl + '/ranks';  // URL to web api 

  constructor(private http: Http) {
    super(http);
  }

  getRanks(): Promise<Rank[]> {
    return this.http
      .get(this.ranksUrl, this.options)
      .toPromise()
      .then(res => {console.log(res.json());
                    return res.json().ranks as Rank[]})
  }


	
}