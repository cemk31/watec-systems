import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { email: '', password: '', token: '', firstName: '', lastName: ''};
  submitted = false;
  showSuccessMessage = false;
  showLoggedInWarning = false;
  constructor(
    public router: Router,
    public userData: UserData,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    if (sessionStorage.getItem("access_token")) {
      this.showLoggedInWarning = true;
    }
  }

  onSignup() {
    const body = this.signup;
    this.http.post<any>('http://localhost:3000/auth/signup', body).subscribe(
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
}
