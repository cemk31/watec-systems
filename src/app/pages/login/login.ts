import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  showLoggedInWarning = false;
  showLoggedOutMessage = false;
  ngOnInit(): void {
    if(sessionStorage.getItem("loggedOut")) {
      this.showLoggedOutMessage = true;
      this.showLoggedInWarning = false;
      sessionStorage.removeItem("loggedOut");
    }
    if (sessionStorage.getItem("access_token")) {
      this.showLoggedInWarning = true;
    }
  }

  login: UserOptions = {
    email: '', password: '',
    token: '',
    firstName: '',
    lastName: ''
  };
  submitted = false;
  // email: string;
  // password: any;
  showSuccessMessage = false;
  token: any;

  constructor(
    public userData: UserData,
    public router: Router,
    private http: HttpClient,
    private appComponent: AppComponent,
    private authService: AuthService,
  ) {}

  onLogin(loginForm: NgForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const email = this.login.email;
    const password = this.login.password;
    const body = {
      email,
      password
    };

    this.http.post<Response>('http://localhost:3000/auth/signin', body, { headers })
      .subscribe(response => {
        this.authService.login(response['access_token'], response['userId'])
        this.showSuccessMessage = true;
        localStorage.setItem("loggedInMessage", "true");
        this.appComponent.loggedIn = true;
        this.router.navigate(['/app/tabs/about']);
      });
  }


}
export interface AuthResponse {
  access_token: string;
}
