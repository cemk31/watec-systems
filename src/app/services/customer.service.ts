import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
    customers: any[] = [];
    exceptionMessage = null;
    public searchResults: any[] = [];

    async loadCustomers(): Promise<any[]> {
      const accessToken = sessionStorage.getItem("access_token");
      let headers = new HttpHeaders();
      if (accessToken) {
        headers = headers.append('Authorization', `Bearer ${accessToken}`);
      }
    
      try {
        const response = await this.http.get<any[]>(environment.backend + environment.url.customers, { headers })
          .pipe(
            map(response => {
              console.log(response);
              this.customers = response;
              this.searchResults = [...this.customers];
              return response;
            }),
            catchError((error) => {
              this.exceptionMessage = error.error.message;
              return throwError(error);
            })
          )
          .toPromise();
        return response;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    
}
