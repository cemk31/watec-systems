import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="message" class="notification">
      {{ message }}
      <button (click)="message = null">Close</button>
    </div>
  `,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string;
}
