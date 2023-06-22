import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ista-order-list',
  templateUrl: './ista-order-list.page.html',
  styleUrls: ['./ista-order-list.page.scss'],
})
export class IstaOrderListPage implements OnInit {
  filterTerm: string = '';
  orders: any[];  // change this according to your data type
  filteredOrders: any[];

  toggleReceived = false;
  togglePlanned = false;

  exceptionMessage = null;
  opened = '';

  data: any[];
  keysToDisplay = ['id', 'createdAt', 'updatedAt', 'number', 'actualStatus'];
  editMode = false;
  
  items = [
    { field1: 'Data 1', field2: 'Data 2', field3: 'Data 3'},
    { field1: 'Data 4', field2: 'Data 5', field3: 'Data 6'},
    { field1: 'Data 7', field2: 'Data 8', field3: 'Data 9'}
  ];
  detailsVisible: boolean[] = [];

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.getIstaOrders();
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
