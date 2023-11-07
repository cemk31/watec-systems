import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service'; //import the service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  customers: any[] = [];
  exceptionMessage = null;
  constructor(private router : Router, private customerService : CustomerService, private http : HttpClient) { } //inject the service

  user: any;
  notifications: string[];
  activities: string[];
  filterTerm: string; // Definieren Sie die Eigenschaft hier

  ngOnInit() {
    if(!sessionStorage.getItem("access_token")) {
      this.router.navigateByUrl('/login');
    }
    this.loadCustomers();

    //test
        // You would typically fetch this data from your backend
        this.user = {
          firstName: 'John ',
          lastName: 'Doe',  
          email: 'john.doe@example.com'
        };
        this.notifications = [
          'Notification 1',
          'Notification 2',
          'Notification 3'
        ];
        this.activities = [
          'Cem Ka änderte den Status von WP-276 - Order Status Integration, update, create, change auf In Arbeit',
          'Activity 2',
          'Activity 3'
        ];
  }

  loadCustomers() {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }

    this.http.get<any[]>(environment.backend + environment.url.customers, { headers })
      .pipe(
        map(response => {
          console.log(response);
          this.customers = response;
          return response;
        }),
        catchError((error) => {
          this.exceptionMessage = error.error.message;
          return throwError(error);
        })
      )
      .subscribe();
  }

  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
