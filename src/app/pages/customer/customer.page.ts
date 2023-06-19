import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  customers: any[] = [];
  exceptionMessage = null;
  public searchResults: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
          this.searchResults = [...this.customers];
          return response;
        }),
        catchError((error) => {
          this.exceptionMessage = error.error.message;
          if (this.exceptionMessage == "Unauthorized") {
            sessionStorage.removeItem("access_token");
            window.location.href = "/login";
          }
          return throwError(error);
        })
      )
      .subscribe();
  }

  search(event: any) {
    const val = event.target.value;

    // Reset items back to all of the items
    if (!val || val.trim() === '') {
      this.searchResults = [...this.customers];
    }
    else {
      this.searchResults = this.customers.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase()));
    }
  }
}
