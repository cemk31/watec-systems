import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-received',
  templateUrl: './create-received.component.html',
  styleUrls: ['./create-received.component.scss'],
})
export class CreateReceivedComponent implements OnInit {
  [x: string]: any;

  orderForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  customers: any;
  @Input() orderId: number;
  showForm = false; // variable to toggle form

  getReceivedFormArray(): FormArray {
    return this.orderForm.get('Received') as FormArray;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      number: [''],
      actualStatus: [''],
      remarkExternal: [''],
      orderId: Number(this.orderId),  
      contactAttemptOn: [''],
      contactPersonCustomer: [''],
      agentCP: [''],
      result: [''],
      remark: ['']
    });
    this.showForm = true;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Empfang wurde zur Bestellung hinzufgeügt. | Auftrag ' + this.orderId + ' | Empfang ' + this.orderForm.value.number,
      // duration: 4000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  createReceivedFormGroup(): FormGroup {
    return this.fb.group({
      orderId: this.orderId,
      CustomerContacts: this.fb.group([this.createContactFormGroup()])
    });
  }

  createContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [''],
      contactPersonCustomer: [''],
      agentCP: [''],
      result: [''],
      remark: ['']
    });
  }

  getReceivedArray(): FormArray {
    return this.orderForm.get('Received') as FormArray;
  }

  // Der Rest des Codes bleibt unverändert

  get receivedArray(): FormArray { // Definition als Getter-Methode
    return this.getReceivedArray();
  }

  addReceived() {
    this.receivedArray.push(this.createReceivedFormGroup());
  }

  getCustomerContactArray(receivedIndex: number): FormArray {
    return this.receivedArray.at(receivedIndex).get('CustomerContacts') as FormArray;
  }

  addCustomerContact(receivedIndex: number) {
    this.getCustomerContactArray(receivedIndex).push(this.createCustomerContactFormGroup());
  }

  onSubmitReceived() {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }    
    console.log(this.orderForm.value);

    this.http.post<any[]>(environment.backend + environment.url.ista.create_received , this.orderForm.value, { headers })
    .pipe(
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe(response => {
      console.log(response);
      this.customers = response;
      this.orderForm.disable(); // Disable all fields in the form
      this.isSubmitted = true;
      this.presentToast(); // Present the toast

      setTimeout(() => {
        // Close the component here
      }, 5000);
      this.segmentVisible = false;
    });
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
