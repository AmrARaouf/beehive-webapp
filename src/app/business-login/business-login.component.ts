import { Component, OnInit } from '@angular/core';

import { BusinessService } from '.././services/business.service';

import { BusinessUserCredentials } from '.././models';

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styles: []
})
export class BusinessLoginComponent {
  userCredentials: BusinessUserCredentials = {
    email: '',
    password: ''
  }

  constructor(private businessService: BusinessService) { }

  login(): void {
    // console.log(businessUser);
    // this.user.email = businessUser.email;
    // this.user.password = businessUser.password;
    this.businessService.login(this.userCredentials).then();
  }
}