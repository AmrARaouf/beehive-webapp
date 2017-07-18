import { Component, OnInit } from '@angular/core';

import { BusinessUser } from '@app/models';
import { BusinessService } from '@app/_services/business.service';

@Component({
  selector: 'app-business-signup',
  templateUrl: './business-signup.component.html',
  styles: []
})

export class BusinessSignUpComponent implements OnInit {
  user: BusinessUser = {
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    password: ''
  };

  private userCreated: boolean;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.userCreated = false;
  }

  signup(): void {
    this.businessService.signup(this.user).then(user => {
      this.userCreated = true
    });
  }
}
