import { Component, OnInit } from '@angular/core';

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

}