import { Component, OnInit } from '@angular/core';

import { NotificationService } from '@app/_services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styles: []
})
export class NotificationComponent implements OnInit {

  private error = '';
  private success = '';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

}
