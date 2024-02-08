import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-create-received",
  templateUrl: "./create-received.component.html",
  styleUrls: ["./create-received.component.scss"],
})
export class CreateReceivedComponent implements OnInit {
  [x: string]: any;

  orderForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  customers: any;
  @Input() orderId: number;
  showForm = false; 
  message = ""; 

  getReceivedFormArray(): FormArray {
    return this.orderForm.get("Received") as FormArray;
  }


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      number: [""],
      actualStatus: [""],
      remarkExternal: [""],
      orderId: Number(this.orderId),
      contactAttemptOn: [""],
      contactPersonCustomer: [""],
      agentCP: [""],
      result: [""],
      remark: [""],
    });
    this.showForm = true;
    this.message = "Kundenkontakt wurde zur Bestellung " + this.orderId + " hinzugefügt. Seite wird in 5 Sekunden erneuert.";
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: color,
      position: "top",
    });
    toast.present();
  }

  createReceivedFormGroup(): FormGroup {
    return this.fb.group({
      orderId: this.orderId,
      CustomerContacts: this.fb.group([this.createContactFormGroup()]),
    });
  }

  createContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [""],
      contactPersonCustomer: [""],
      agentCP: [""],
      result: [""],
      remark: [""],
    });
  }

  getReceivedArray(): FormArray {
    return this.orderForm.get("Received") as FormArray;
  }

  // Der Rest des Codes bleibt unverändert

  get receivedArray(): FormArray {
    // Definition als Getter-Methode
    return this.getReceivedArray();
  }

  addReceived() {
    this.receivedArray.push(this.createReceivedFormGroup());
  }

  getCustomerContactArray(receivedIndex: number): FormArray {
    return this.receivedArray
      .at(receivedIndex)
      .get("CustomerContacts") as FormArray;
  }

  addCustomerContact(receivedIndex: number) {
    this.getCustomerContactArray(receivedIndex).push(
      this.createCustomerContactFormGroup()
    );
  }

  onSubmitReceived() {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append("Authorization", "Bearer " + accessToken);
    }
    
    this.http
      .post<any[]>(
        environment.backend + environment.url.ista.create_received,
        this.orderForm.value,
        { headers }
      )
      .pipe(
        catchError((error) => {
          this.exceptionMessage = error.error.message;
          this.presentToast(this.exceptionMessage, "danger");
          return throwError(() => error); // Handle the error
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.customers = response;
          this.orderForm.disable(); // Disable all fields in the form
          this.isSubmitted = true;
          this.presentToast(this.message, "success"); // Present the toast

          setTimeout(() => {
            // Close the component here
          }, 5000);
          this.segmentVisible = false;
        },
        error: (error) => {
          console.error(error);
          this.presentToast(this.exceptionMessage, "danger");
          // Handle the error here
        },
      });

    this.segmentVisible = false;
    // this.showForm = false;
    this.orderForm.disable(); // Disable all fields in the form

    this.presentToast(this.message, "success"); // Present the toast
    setTimeout(() => {
      location.reload(); // Refresh the page
    }, 5000);

  }

  resetForm() {
    this.orderForm.reset();
  }

  updateContactAttemptOnDate(event: any) {
    this.orderForm.patchValue({
      contactAttemptOn: event.target.value,
    });
  }
}
