import { Component, OnInit } from '@angular/core';

import { BusinessService } from '.././services/business.service';

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styles: []
})
export class BusinessLoginComponent {
  user = {
    email: '',
    password: ''
  }

  constructor(private businessService: BusinessService) { }

  login(businessUser: BusinessLoginComponent): void {
    this.businessService.login(businessUser);
  }
}