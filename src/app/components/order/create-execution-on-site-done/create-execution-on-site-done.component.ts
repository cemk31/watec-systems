import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-execution-on-site-done',
  templateUrl: './create-execution-on-site-done.component.html',
  styleUrls: ['./create-execution-on-site-done.component.scss'],
})
export class CreateExecutionOnSiteDoneComponent implements OnInit {

  @Input() orderId: number;
  createExecutionOnSiteForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder, private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
    this.createExecutionOnSiteForm = this.fb.group({
      orderId: Number(this.orderId),
      orderstatusType: [''], // entfernt "disabled: true"
      executionOnSiteDoneReason: [''], // entfernt "disabled: true"
      done: false, // entfernt "disabled: true"
    });
  }

  onExecutionOnSiteDoneSubmit() {
    console.log(this.createExecutionOnSiteForm.value);
    
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    
    const formValue = this.createExecutionOnSiteForm.value;

    const payload = {
      ...formValue,
    };

    this.http.post<any[]>(environment.backend + environment.url.ista.done , payload, { headers })
    .subscribe({
      next: (response) => {
        console.log(response);
        this.isSubmitted = true;
        this.createExecutionOnSiteForm.disable(); // Disable all fields in the form
        this.presentToast("AUFTRAG ERLEDIGT!", 10000, 'success', 'middle');
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
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

  cancel() {
    console.log('Cancel');
  }
}