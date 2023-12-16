import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-create-postponed",
  templateUrl: "./create-postponed.component.html",
  styleUrls: ["./create-postponed.component.scss"],
})
export class CreatePostponedComponent implements OnInit {
  [x: string]: any;

  createPostponedForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  customers: any;
  @Input() orderId: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.createPostponedForm = this.fb.group({
      orderId: Number(this.orderId),
      orderstatusType: [null], // entfernt "disabled: true"
      postponedReason: [null], // entfernt "disabled: true"
    });
  }

  onSubmitPostponed() {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }

    console.log(this.orderForm.value);

    this.http.put<any[]>(environment.backend + environment.url.ista.postponed , this.orderForm.value, { headers })
    .pipe(
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe(response => {
      console.log(response);
      this.customers = response;
      this.presentToast(); // Present the toast
      this.orderForm.disable(); // Disable all fields in the form
      this.isSubmitted = true;
    });
  }

  cancel() {
    console.log("cancel()");
  }
}
