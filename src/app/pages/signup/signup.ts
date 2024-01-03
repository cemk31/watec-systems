import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../services/notification.service';
import { ToastController } from '@ionic/angular';
import { set } from 'date-fns';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})

export class SignupPage implements OnInit {

  isUserLoggedIn: boolean = false;
 
  
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

  signup: UserOptions = { email: '', password: '', passwordConfirm: '', token: '', firstName: '', lastName: '', userRole: ''};
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
    private ngZone: NgZone,
    private toastController: ToastController
  ) {
    this.notificationService.currentMessage.subscribe(message => this.message = message);
  }
  
  ngOnInit(): void {
    if (sessionStorage.getItem("access_token")) {
      this.showLoggedInWarning = true;
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }
  emailError : string;
  onSignup(signupForm: NgForm) {
    if(signupForm.invalid){
      return
    } else{
      this.http.post<any>(environment.backend + environment.url.register, this.signup).subscribe(
        res => {
          if (res && res.access_token) {
            this.showSuccessMessage = true;
            setTimeout(() => {
              duration: 2000
            });
            localStorage.setItem("loggedInMessage", "true");
            localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
            this.router.navigate(['/login']);
            window.location.reload();
          } else {
            // Handle unexpected server response
            console.error("Unexpected server response:", res);
            this.presentToast(this.notificationMessages.unexpected.message, this.notificationMessages.unexpected.color);
            this.notificationMessage = this.notificationMessages.unexpected;
          }
        },
        err => {
          if (err.status === 403 && err.error.message === "Credentials taken") {
            // display the error to the user
            this.notificationMessage = this.notificationMessages.userNameAlreadyInUs;
            this.emailError = "Email already in use"; 
            console.log("emailerror", this.emailError);
            this.presentToast(this.notificationMessages.userNameAlreadyInUs.message, this.notificationMessages.userNameAlreadyInUs.color);
          } else {
            console.error(err);
            // Better error handling: show a message to the user, for example
            this.notificationMessage = this.notificationMessages.error;
            this.emailError = "Registration failed! Please contact admin or try it again later!";
            this.presentToast(this.notificationMessages.error.message, this.notificationMessages.error.color);
          }
        }
      );
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  tokenError : string;
  validateCode(inviteCodeForm: NgForm) {
    try {
      const accessToken = this.signup.token;
      let role: string;
      console.log(accessToken)
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
      this.notificationMessage = this.notificationMessages.validCode;
      //wait 3 seconds
      setTimeout(() => {
      }, 5000);
      this.showRegisterForm = true;
      this.signup.userRole = role;
      this.toastController.create({
        message: 'Code gültig!',
        duration: 5000,
        color: 'success'
      }).then(toast => toast.present());

      return role;
    } catch (error) {
      this.tokenError = "Code ungültig";
      this.toastController.create({
        message: 'Code ungültig! Fehler: ' + error.message,
        duration: 5000,
        color: 'danger'
      }).then(toast => toast.present());
      // display error message
      this.notificationMessage = this.notificationMessages.invalidCode;
    }
  }
}

