import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.page.html",
  styleUrls: ["./create-customer.page.scss"],
})
export class CreateCustomerPage implements OnInit {
  customers: any[];

  customerForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    street: new FormControl(""),
    zipCode: new FormControl(""),
    place: new FormControl(""),
    country: new FormControl(""),
  });

  constructor(private http: HttpClient) { }

  exceptionMessage = null;
  ngOnInit() {
    // this.customerForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'phone': new FormControl(null, Validators.required)
    // });
  }

  onSubmit(customerForm: NgForm) {
    const body = {
      ...this.customerForm.value
    }
    // Implement your logic to save the customer

    //set token
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    this.http.post<any[]>(environment.backend + environment.url.customers , customerForm.value, { headers })
    .pipe(
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe(response => {
      console.log(response);
      this.customers = response;
    });
  }

}
