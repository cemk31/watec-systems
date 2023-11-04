import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-cancelled',
  templateUrl: './create-cancelled.component.html',
  styleUrls: ['./create-cancelled.component.scss'],
})
export class CreateCancelledComponent implements OnInit {

  [x: string]: any;

  createCancelledForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  customers: any;
  @Input() orderId: number;

  getCancelledFormArray(): FormArray {
    return this.orderForm.get('Cancelled') as FormArray;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.createCancelledForm = this.fb.group({
      orderId: Number(this.orderId),  
      orderstatusType: [null],  // entfernt "disabled: true"
      setOn: [null],  // entfernt "disabled: true"
      cancellationReason: [null],
      statusType: [null],  // entfernt "disabled: true"
    });
  }

  onSubmitCancelled() {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    
    const formValue = this.createCancelledForm.value;

    const convertToDateInstance = (dateString) => {
      return dateString ? new Date(dateString) : null;
    };
    
    const payload = {
      ...formValue,
      setOn: convertToDateInstance(formValue.setOn),
      detailedScheduleDate: convertToDateInstance(formValue.detailedScheduleDate),
      detailedScheduleTimeFrom: convertToDateInstance(formValue.detailedScheduleTimeFrom),
      detailedScheduleTimeTo: convertToDateInstance(formValue.detailedScheduleTimeTo),
      requestId: formValue.requestId ? Number(formValue.requestId) : null, // Konvertieren Sie es in eine Nummer, wenn nicht null
    };     
    this.http.post<any[]>(environment.backend + environment.url.ista.cancelled , payload, { headers })
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
      this.createCancelledForm.disable(); // Disable all fields in the form
      this.isSubmitted = true;
    });
  }

  cancel() {
    console.log('cancel()');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Auftrag storniert. | Auftrag ' + this.orderId + ' | Empfang ' + this.createCancelledForm.value.number,
      duration: 4000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
