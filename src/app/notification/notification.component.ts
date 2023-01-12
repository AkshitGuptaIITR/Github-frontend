import { Component } from '@angular/core';
import { ErrorMessageService } from '../ErrorMessage/error-message.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  constructor(public error: ErrorMessageService) { }
}

