import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auftrag-detail',
  templateUrl: './auftrag-detail.page.html',
  styleUrls: ['./auftrag-detail.page.scss'],
})
export class AuftragDetailPage implements OnInit {


  orderForm: FormGroup; // Definieren Sie das FormGroup-Objekt
  exceptionMessage: string;
  customers: any[];
  isSubmitted: boolean = false;
  receivedArray: FormArray;

    constructor(private fb: FormBuilder, private http: HttpClient, private toastController: ToastController) {
    this.orderForm = this.createReceivedFormGroup(); // Initialisieren des FormGroup-Objekts
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Order created successfully.',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  createReceivedFormGroup(): FormGroup {
    return this.fb.group({
      orderstatusType: [''],
      CustomerContacts: this.fb.array([
        this.createCustomerContactFormGroup()
      ])
    });
  }

  createCustomerContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [''],
      contactPersonCustomer: [''],
      agentCP: [''],
      result: [''],
      remark: ['']
    });
  } 

  getReceivedArray(): FormArray {
    // Änderung hier: von 'received' zu 'Received'
    return this.orderForm.get('Received') as FormArray;
  }

  addReceived() {
    this.receivedArray.push(this.createReceivedFormGroup());
  }

  getCustomerContactArray(receivedIndex: number): FormArray {
    // Änderung hier: von 'customerContacts' zu 'CustomerContacts'
    return this.receivedArray.at(receivedIndex).get('CustomerContacts') as FormArray;
  }

  addCustomerContact(receivedIndex: number) {
    this.getCustomerContactArray(receivedIndex).push(this.createCustomerContactFormGroup());
  }

  onSubmit() {
    console.log(this.orderForm.value);
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    this.http.post<any[]>(environment.backend + environment.url.ista.received , this.orderForm.value, { headers })
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

  transferToIsta() {
    console.log("Data transferred to Ista");
    // Your logic to transfer data to Ista goes here
  }

}
