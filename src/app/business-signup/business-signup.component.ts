import { Component, OnInit } from '@angular/core';

import { BusinessUser } from '@app/models';
import { BusinessService } from '@app/_services/business.service';

@Component({
  selector: 'app-business-signup',
  templateUrl: './business-signup.component.html',
  styles: []
})

export class BusinessSignUpComponent {
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
