import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BusinessService } from '@app/_services/business.service';
import { BusinessUserCredentials } from '@app/models';

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

  constructor(
    private businessService: BusinessService,
    private router: Router) { }

  login(): void {
    this.businessService.login(this.userCredentials).then( user => {
      this.router.navigate(['/projects'])
    });
  }
}