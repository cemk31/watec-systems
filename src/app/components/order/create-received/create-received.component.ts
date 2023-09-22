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

  getReceivedFormArray(): FormArray {
    return this.orderForm.get('Received') as FormArray;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      // Customer: this.fb.group({
      //     propertyNumber: [''], // Liegenschaftsnummer
      //     companyName: [''], // Firma
      //     firstName: [''], // Vorname
      //     lastName: [''], // Nachname
      //     customerContact: [''], // Ansprechpartner Kunde
      //     street: [''], // Adresse
      //     zipCode: [''], // PLZ
      //     city: [''], // Ort
      //     phone: [''], // Telefon
      //     mobile: [''], // Mobil
      //     fax: [''], // Fax
      //     email: [''], // E-Mail
      //   }),
      number: [''],
      actualStatus: [''],
      remarkExternal: [''],
      orderId: Number(this.orderId),  
      Received: this.fb.array([
        this.fb.group({
          orderstatusType: [''],
          CustomerContacts: this.fb.array([
            this.fb.group({
              contactAttemptOn: [''],
              contactPersonCustomer: [''],
              agentCP: [''],
              result: [''],
              remark: [''],
            })
          ])
        })
      ])
    });
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Empfang wurde zur Bestellung hinzufgeügt. | Auftrag ' + this.orderId + ' | Empfang ' + this.orderForm.value.number,
      duration: 4000,
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

    this.http.put<any[]>(environment.backend + environment.url.ista.received , this.orderForm.value, { headers })
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
    this.isSubmitted = false;
  }
}
