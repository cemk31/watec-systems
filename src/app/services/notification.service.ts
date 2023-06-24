import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSource = new BehaviorSubject<string>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  show(message: string) {
    this.messageSource.next(message);
    setTimeout(() => this.messageSource.next(null), 3000);  // auto-dismiss after 3 seconds
  }
}
