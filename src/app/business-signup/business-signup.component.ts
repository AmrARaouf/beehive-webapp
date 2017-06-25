import { Component, OnInit } from '@angular/core';
import { BusinessUser } from './../models';

@Component({
  selector: 'app-business-signup',
  templateUrl: './business-signup.component.html',
  styles: []
})
export class BusinessSignupComponent {
  user: BusinessUser = {
    full_name: '',
    organization: '',
    email: '',
    phone: '',
    password: '',
    message: ''
  };
}
