import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { format } from 'date-fns';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
})
export class OrderTableComponent implements OnInit {

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
        
        this.orders.forEach(order => {
          order.actualStatus = order.actualStatus.toLowerCase();
          if (order.actualStatus === 'received') {
            order.actualStatus = 'Empfangen';
          } else if (order.actualStatus === 'planned') {
            order.actualStatus = 'In planung';
          } else if (order.actualStatus === 'postponed') {
            order.actualStatus = 'Verschoben';
          } else if (order.actualStatus === 'closed') {
            order.actualStatus = 'Abgeschlossen';
          } else if (order.actualStatus === 'cancelled') {
            order.actualStatus = 'Storno';
          }
        });

        return this.orders;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }

  showFilter = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (dateString === null) {
      return '';
    }
    return format(date, 'dd.MM.yyyy');
  }
}