import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})

export class SignupPage implements OnInit {
  signup: UserOptions = { email: '', password: '', token: '', firstName: '', lastName: '', userRole: ''};
  submitted = false;
  showSuccessMessage = false;
  showLoggedInWarning = false;
  showRegisterForm = false;
  userRole : String = "";

  inviteCodeForm = new FormGroup({
    token: new FormControl(""),
  });

  constructor(
    public router: Router,
    public userData: UserData,
    private http: HttpClient,
  ) {}
  
  ngOnInit(): void {
    if (sessionStorage.getItem("access_token")) {
      this.showLoggedInWarning = true;
    }
  }

  onSignup() {
    const body = { 
      ...this.signup,
      userRole: this.userRole
    };
    
    this.http.post<any>(environment.url.register, body).subscribe(
      res => {
        console.log(res.access_token);
        sessionStorage.setItem("access_token", res.access_token);
        sessionStorage.setItem("loggedIn", "true");
        this.showSuccessMessage = true;
        setTimeout(() => {
          // Your code here
        }, 5000);
        // this.router.navigate(["/app/tabs/about"]);
      },
      err => {
        console.error(err);
      }
    );
  }

  validateCode(inviteCodeForm: NgForm) {
    const accessToken = inviteCodeForm.value.token; // assuming 'token' is the name of your form control
  
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
        role = 'Unknown';
    }
  
    // assuming you have a service to set the user role
    // this.userService.setUserRole(role);
  
    // then show the register form
    this.showRegisterForm = true;
    this.userRole = role;
    // return the role, but this won't be visible in the UI. Use for debugging
    return role;
  }
  
}
