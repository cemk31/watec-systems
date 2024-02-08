import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../services/toast/toast.service';

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
  showForm = false; // variable to toggle form
  
  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.createPlannedForm = this.fb.group({
      orderId: Number(this.orderId),  
      orderstatusType: [''],  // entfernt "disabled: true"
      setOn: [''],  // entfernt "disabled: true"
      detailedScheduleDate: [null],  // entfernt "disabled: true"
      detailedScheduleTimeTo: [null],  // entfernt "disabled: true"
      requestId: [''],  // entfernt "disabled: true"
      detailedScheduleTimeFrom: [null],  // entfernt "disabled: true"
      detailedScheduleDelayReason: [null],  // entfernt "disabled: true"
    });
    this.showForm = true;
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
      this.presentToast("Planung wurde dem Auftrag hinzugefügt!", 10000, 'success', 'middle');
      this.createPlannedForm.disable(); // Disable all fields in the form
      this.isSubmitted = true;
      this.showForm = false;
    });
  }

  cancel() {
    this.createPlannedForm.disable(); // Disable all fields in the form
    this.isSubmitted = true;
  }

  updateDate(event: any) {
    // Logik zur Aktualisierung der FormControl-Werte
    console.log("eventDetail: ", event.detail.value);
    console.log("event: ", event);
  }

  updateDetailedScheduleDate(event: any) {
    // Logik zur Aktualisierung der FormControl-Werte
    console.log("eventDetail: ", event.detail.value);
    console.log("event: ", event);
    this.createPlannedForm.patchValue({
      detailedScheduleDate: event.detail.value,
    });
  }

  updateDetailedScheduleTimeFrom(event: any) {
    // Logik zur Aktualisierung der FormControl-Werte
    console.log("eventDetail: ", event.detail.value);
    console.log("event: ", event);
    this.createPlannedForm.patchValue({
      detailedScheduleTimeFrom: event.detail.value,
    });
  }

  updateDetailedScheduleTimeTo(event: any) {
    // Logik zur Aktualisierung der FormControl-Werte
    console.log("eventDetail: ", event.detail.value);
    console.log("event: ", event);
    this.createPlannedForm.patchValue({
      detailedScheduleTimeTo: event.detail.value,
    });
  }

  async presentToast(message: string = null, duration: number = 3000, color: string = 'success', position: 'top' | 'bottom' | 'middle' = 'top') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color,
      position: position,
    });
    toast.present();
  }
  
}
