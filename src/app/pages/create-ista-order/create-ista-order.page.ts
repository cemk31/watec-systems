import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-ista-order',
  templateUrl: './create-ista-order.page.html',
  styleUrls: ['./create-ista-order.page.scss'],
})
export class CreateIstaOrderPage implements OnInit {
  [x: string]: any;

  orderForm: FormGroup;
  exceptionMessage: string = null;
  customers: any; 
  
  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) {
    this.orderForm = this.fb.group({
      remarkExternal: [''],
      actualStatus: [''],
      Received: this.fb.array([
        this.createReceivedFormGroup()
      ])
    });
  }
  ngOnInit(): void {

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Order created successfully.',
      duration: 2000,
      color: 'success',  // change the color of the toast
      position: 'top'   // position the toast at the top of the screen
    });
    toast.present();
  }

  createReceivedFormGroup(): FormGroup {
    return this.fb.group({
      orderstatusType: [''],
      CustomerContact: this.fb.array([
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

  get receivedArray(): FormArray {
    return this.orderForm.get('Received') as FormArray;
  }

  addReceived() {
    this.receivedArray.push(this.createReceivedFormGroup());
  }

  getCustomerContactArray(receivedIndex: number): FormArray {
    return this.receivedArray.at(receivedIndex).get('CustomerContact') as FormArray;
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
    this.http.post<any[]>(environment.backend + environment.url.customers , this.orderForm.value, { headers })
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
    });
  }
}

