import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ista-order',
  templateUrl: './create-ista-order.page.html',
  styleUrls: ['./create-ista-order.page.scss'],
})
export class CreateIstaOrderPage implements OnInit {
  customerForm: FormGroup;


  onSubmitCreateNewCustomer(customerForm: FormGroup) {
    console.log(customerForm.value);
  }

  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController, private router: Router) {
    this.customerForm = this.fb.group({
      Customer: this.fb.group({
        customerNumber: [''],
        firstName: [''],
        lastName: [''],
        street: [''],
        zipCode: [''],
        city: ['']
      }),
      Objekt: this.fb.array([this.createObjektFormGroup()]),
      Received: this.fb.array([this.createReceivedFormGroup()])
    });


  }

  createObjektFormGroup(): FormGroup {
    return this.fb.group({
      liNr: [''],
      street: [''],
      zipCode: [''],
      city: ['']
    });
  }

  createReceivedFormGroup(): FormGroup {
    return this.fb.group({
      orderId: [''],
      CustomerContacts: this.fb.array([this.createContactFormGroup()])
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

  

  get objekteFormArray(): FormArray {
    return this.customerForm.get('Objekt') as FormArray;
  }

  getReceivedArray(): FormArray {
    return this.customerForm.get('Received') as FormArray;
  }
  
  addNewObjekt() {
    this.objekteFormArray.push(this.createObjektFormGroup());
  }

  ngOnInit(): void {
    this.customerForm.reset();
  }

  async presentToast(orderId: number, message: string = null, duration: number = 3000, color: string = 'success', position: 'top' | 'bottom' | 'middle' = 'top') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color,
      position: position,
      buttons: [{ text: 'schliessen', role: 'cancel' },
                { text: 'öffnen', role: 'end', 
                handler: () => {
                  this.navigateToProductDetails(orderId);
                }
                },],
    });
    toast.present();
  }

  navigateToProductDetails(orderId: number) {
    this.router.navigateByUrl('/ista-order-detail/' + orderId);
  }
  
  async onSubmit(form: FormGroup) {
    console.log(form.value);
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    this.http.post<Response[]>(environment.backend + environment.url.ista.received , this.customerForm.value, { headers })
    .pipe(
      catchError((error) => {
        // this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe((response: any) => {
      try {
        console.log("response", response);
        console.log("responseID: ", response.id); // Access the id property of each element
        this.presentToast(response.id, 'Auftrag wurde erfolgreich erstellt!', 3000, 'success', 'top'); // Present the toast
        this.customerForm.disable();
      } catch (error) {
        this.presentToast(null, 'Auftrag konnte nicht erstellt werden!', 3000, 'danger', 'top'); // Present the toast
      }
    });
  }
}

//Interface
export interface Response {
  id: number;
}

