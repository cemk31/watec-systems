import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthService implements OnInit {

  loggedIn = false;
  access_token = null;
  userId = null;

  constructor() { }

  ngOnInit() {}

  getLoggedIn() {
    return this.loggedIn;
  }

  getAccessToken() {
    if (sessionStorage.getItem("access_token")) {
      return sessionStorage.getItem("access_token");
    } else {
      return this.access_token;
    }
  }

  setAccessToken(token: string) {
    sessionStorage.setItem("access_token", token);
    this.access_token = token;
    return sessionStorage.getItem("access_token")
  }

  getUserId() {
    return sessionStorage.getItem("userId");
  }

  setUserId(userId: string) {
    sessionStorage.setItem("userId", userId) 
    this.userId = userId;
  }

  login(access_token: string, userId: string) {
    this.loggedIn = true;
    sessionStorage.setItem("loggedIn", this.loggedIn.toString());
    this.setAccessToken(access_token);
    this.setUserId(userId);
  }
}
