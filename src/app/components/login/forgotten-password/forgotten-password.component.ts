import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent {

  userEmail: string;

  constructor() { }

  resetPassword() {
    console.log('resetPassword');
  }

  onSubmit() {
    console.log('onSubmit');
  }

}
