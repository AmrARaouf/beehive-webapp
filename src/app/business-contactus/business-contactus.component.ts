import { Component, OnInit } from '@angular/core';

import { BusinessUser } from '@app/models';
import { BusinessService } from '@app/_services/business.service';

@Component({
  selector: 'app-business-contactus',
  templateUrl: './business-contactus.component.html',
  styles: []
})

export class BusinessContactUsComponent {
  user: BusinessUser = {
    full_name: '',
    organization: '',
    email: '',
    phone: '',
    password: '',
    message: ''
  };

  formSubmitted = false;

  constructor(private businessService: BusinessService) { }

  signup(): void {
    this.businessService.signup(this.user).then(user => {
      if(user) {
        this.formSubmitted = true
      }
    });
  }
}
