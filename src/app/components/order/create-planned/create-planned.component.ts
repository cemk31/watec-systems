import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-planned',
  templateUrl: './create-planned.component.html',
  styleUrls: ['./create-planned.component.scss'],
})
export class CreatePlannedComponent implements OnInit {
  [x: string]: any;

  createPlannedForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  customers: any;
  @Input() orderId: number;
  
  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.createPlannedForm = this.fb.group({
      orderId: Number(this.orderId),  
      orderstatusType: [null],  // entfernt "disabled: true"
      setOn: [null],  // entfernt "disabled: true"
      detailedScheduleDate: [null],  // entfernt "disabled: true"
      detailedScheduleTimeTo: [null],  // entfernt "disabled: true"
      requestId: [null],  // entfernt "disabled: true"
      detailedScheduleTimeFrom: [null],  // entfernt "disabled: true"
      detailedScheduleDelayReason: [null],  // entfernt "disabled: true"
    });
  }
  

  onSubmitPlanned() {
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    
    const formValue = this.createPlannedForm.value;

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
    this.http.post<any[]>(environment.backend + environment.url.ista.planned , payload, { headers })
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
    this.createPlannedForm.disable(); // Disable all fields in the form
    this.isSubmitted = true;
  }
}
