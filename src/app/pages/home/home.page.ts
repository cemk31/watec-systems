import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service'; //import the service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
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

  ngOnInit() {
    if(!sessionStorage.getItem("access_token")) {
      this.router.navigateByUrl('/login');
    }
    this.loadCustomers();
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
