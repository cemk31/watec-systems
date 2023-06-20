import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-ista',
  templateUrl: './ista.page.html',
  styleUrls: ['./ista.page.scss'],
})
export class IstaPage implements OnInit {
  filterTerm: string = '';
  orders: any[];  // change this according to your data type
  filteredOrders: any[];

  toggleReceived = false;
  togglePlanned = false;

  exceptionMessage = null;

  opened = '';


  constructor(private router : Router, private http: HttpClient) {
    this.orders = []; // Initialize with your orders data
    this.filteredOrders = [...this.orders]; // Initialize filteredOrders with all orders
   }

  ngOnInit() {
    this.getIstaOrders();
  }

  ngOnChanges() {
    this.filterOrders();
  }

  filterItems() {
    if (this.filterTerm.trim() === '') {
      this.filteredOrders = [...this.orders];
    } else {
      this.filteredOrders = this.orders.filter(order => {
        // change 'id' and 'number' to the fields you want to search by
        return order.id.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
               order.number.toLowerCase().includes(this.filterTerm.toLowerCase());
      });
    }
  }

  filterOrders() {
    if (this.filterTerm) {
      this.filteredOrders = this.orders.filter(order => 
        order.id.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        order.number.toLowerCase().includes(this.filterTerm.toLowerCase())
        // Add more conditions if you want to filter by other fields
      );
    } else {
      this.filteredOrders = [...this.orders];
    }
  }

  getIstaOrders() {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    this.http.get<any[]>(environment.backend + environment.url.ista.url, { headers })
    .pipe(
      map(response => {
        console.log(response);
        this.orders = response;
        return response;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }

}
