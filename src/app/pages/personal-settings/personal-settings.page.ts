import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface User {
  id: number,
  createdAt: string,
  updatedAt: string,
  email: string,
  firstName: string,
  lastName: string
}
@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.page.html',
  styleUrls: ['./personal-settings.page.scss'],
})
export class PersonalSettingsPage implements OnInit {
  resetPasswordForm: FormGroup;
  showEditButtons: Boolean = false;
  editMode = false;
  domain: string = "http://localhost:3000"
  firstName: any;
  lastName: any;
  showSuccessMessage = false;

  constructor(private http: HttpClient, private router: Router, private navCtrl: NavController) {
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem("access_token")) {
      this.router.navigate(["/login"]);
    }
    this.getUserData().subscribe((response) => {
      this.user = response.user;
    });
  }

  getUserData(): Observable<any> {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    return this.http.get<any>(`${this.domain}/users/me`, { headers: headers });
  }

  submitResetPassword(): void {
    // Implement the logic to reset the user's password
    console.log(this.resetPasswordForm.value);
  }

  edit() {
    this.showEditButtons = !this.showEditButtons;
    this.editMode = !this.editMode;
  }

  editUser(firstName: string, lastName: string) {
    const updatedUserData = {
      firstName: firstName,
      lastName: lastName,
      id: 1,
    };

    this.updateUser(updatedUserData).subscribe((response) => {
      console.log("UpdatedUserData: ", updatedUserData);
      this.showSuccessMessage = true;
      this.showEditButtons = false;
    });
  }

  onCancelClick() {
    this.showEditButtons = false;
  }

  //service method
  updateUser(userData: any): Observable<any> {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    return this.http.patch<any>(`${this.domain}/users`, userData, { headers });
  }

  user: User =
    {
      id: 1,
      createdAt: "2023-04-23T10:10:45.915Z",
      updatedAt: "2023-04-23T10:10:45.915Z",
      email: "cem22@test.de",
      firstName: "Test",
      lastName: "null"
    }

}
