import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ista-order-list',
  templateUrl: './ista-order-list.component.html',
  styleUrls: ['./ista-order-list.component.scss'],
})
export class IstaOrderListComponent implements OnInit {

  orders: any[];  // change this according to your data type
  filteredOrders: any[];

  toggleReceived = false;
  togglePlanned = false;
  exceptionMessage = null;
  selectedId: number | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.getIstaOrders();
  }

  filterTerm: string;
  userRecords: Array<any> = [
    { id: 1, status:'RECEIVED', propertyNumber: '123', company: 'Firma1', customerContact: 'John', city: 'City1', phone: '1234567890', mobile: '0987654321', email: 'john@email.com' },
    // ...more records
  ];

  showDetails: boolean[] = [];

  toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];
  }

  openDetails(id: number) {
    this.selectedId = id;
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