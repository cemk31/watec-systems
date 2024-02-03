import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-rejected',
  templateUrl: './create-rejected.component.html',
  styleUrls: ['./create-rejected.component.scss'],
})
export class CreateRejectedComponent implements OnInit {
  @Input() orderId: number;
  createRejectedForm: FormGroup;
  isSubmitted = false;
  exceptionMessage: any;
  message = "Bestellung wurde abgelehnt. Seite wird in 5 Sekunden erneuert.";

  constructor(private fb: FormBuilder, private http: HttpClient, public toastController: ToastController) {
  }

  ngOnInit() {
    this.createRejectedForm = this.fb.group({
      orderId: Number(this.orderId),  
      orderstatusType: [''],  // entfernt "disabled: true"
      rejectedReason: [''],  // entfernt "disabled: true"
      rejectedReasonText: [''],  // entfernt "disabled: true"
      reason: [''],  // entfernt "disabled: true"
      reasonText: [''],  // entfernt "disabled: true"
    });
  }

  onSubmitRejected() {
    console.log(this.createRejectedForm.value);
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append("Authorization", "Bearer " + accessToken);
    }
    this.http
    .post<any[]>(
      environment.backend + environment.url.ista.rejected,
      this.createRejectedForm.value,
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
        this.createRejectedForm.disable(); // Disable all fields in the form
        this.isSubmitted = true;
        this.presentToast(this.message, "success"); // Present the toast

        setTimeout(() => {
          // Close the component here
        }, 5000);
      },
      error: (error) => {
        console.error(error);
        this.presentToast(this.exceptionMessage, "danger");
        // Handle the error here
      },
    });
  }

  cancel() {
    console.log('Cancel');
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
}
