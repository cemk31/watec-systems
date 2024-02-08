import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  id: string;
  exceptionMessage = null;
  opened = "";
  // public response = { id: null, createdAt: null }; // oder ein initialer Wert
  response = null;

  constructor(private fb: FormBuilder, private orderService: OrderService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.getIstaOrderDetail();
    this.orderService.signalInit();
  }

  getIstaOrderDetail() {
    // Abrufen der ID aus dem Route-Parameter
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.id = "22";
    // Abrufen der Daten vom Server
    const url = `${environment.backend + environment.url.ista.order}/${
      this.id
    }`;
    console.log(url);

    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append("Authorization", `Bearer ${accessToken}`);
    }
    this.http
      .get<any[]>(url, { headers })
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
        catchError((error) => {
          this.exceptionMessage = error.error.message;
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.response = data; // Hier setzen Sie den Wert für 'response'
        this.orderService.setData(data);
      });
  }
}
