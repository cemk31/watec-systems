import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../services/notification.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})

export class SignupPage implements OnInit {

   notificationMessage = {
    message: '',
    color: ''    
  }

  notificationMessages = {
    success:  {
      message: "Registration successful! Please login to continue.",
      color: "success", 
    },
    error: {
      message: "Registration failed! Please contact admin or try it again later!",
      color: "danger", 
    },
    invalidCode: {
      message: "Code is invalid!",
      color: "danger", 
    },
    validCode: {
      message: "Code is valid!",
      color: "success", 
    },
    unexpected: {
      message: "Unexpected server response:",
      color: "danger"
    },
    userNameAlreadyInUs: {
      message: "The username or email is already in use. Please try another one.",
      color: "danger"
    }
  }

  signup: UserOptions = { email: '', password: '', token: '', firstName: '', lastName: '', userRole: ''};
  submitted = false;
  showSuccessMessage = false;
  showLoggedInWarning = false;
  showRegisterForm = false;
  userRole : String = "";

  inviteCodeForm = new FormGroup({
    token: new FormControl(""),
  });
  message: string;

  constructor(
    public router: Router,
    public userData: UserData,
    private http: HttpClient,
    private notificationService: NotificationService,
    private ngZone: NgZone
  ) {
    this.notificationService.currentMessage.subscribe(message => this.message = message);
  }
  
  ngOnInit(): void {
    if (sessionStorage.getItem("access_token")) {
      this.showLoggedInWarning = true;
    }
  }

  onSignup() {
    this.http.post<any>(environment.backend + environment.url.register, this.signup).subscribe(
      res => {
        if (res && res.access_token) {
          sessionStorage.setItem("access_token", res.access_token);
          sessionStorage.setItem("loggedIn", "true");
          this.notificationMessage = this.notificationMessages.success;
          this.ngZone.runOutsideAngular(() => {
            window.location.href = '/app/tabs/about';
        });
        } else {
          // Handle unexpected server response
          console.error("Unexpected server response:", res);
          this.notificationMessage = this.notificationMessages.unexpected;
        }
      },
      err => {

        if (err.status === 403 && err.error.message === "Credentials taken") {
          // display the error to the user
          this.notificationMessage = this.notificationMessages.userNameAlreadyInUs;
        } else {
          console.error(err);
          // Better error handling: show a message to the user, for example
          this.notificationMessage = this.notificationMessages.error;
        }
      }
    );
  }  

  validateCode(inviteCodeForm: NgForm) {
    try {
      const accessToken = inviteCodeForm.value.token;
      let role: string;

      switch (accessToken) {
        case 'MITARBEITER2023':
          role = 'MITARBEITER';
          break;
        case 'ADMIN2020':
          role = 'Administrator';
          break;
        case 'SUPERADMIN22':
          role = 'SuperAdministrator';
          break;
        default:
          throw new Error("Invalid access token");
      }

      this.showRegisterForm = true;
      this.signup.userRole = role;
      this.notificationMessage = this.notificationMessages.validCode;
      
      return role;
    } catch (error) {
      // display error message
      this.notificationMessage = this.notificationMessages.invalidCode;
    }
  }
}
