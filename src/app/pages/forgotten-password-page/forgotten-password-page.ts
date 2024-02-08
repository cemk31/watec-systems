import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten-password-page',
  templateUrl: './forgotten-password-page.html',
  styleUrls: ['./forgotten-password-page.scss'],
})
export class ForgottenPasswordPage {
[x: string]: any;

  userEmail: string;

  constructor(private http: HttpClient, private toastController: ToastController, public router: Router,) { }

  showResetPassword: boolean = true;
  showResetPassword2: boolean = false;

  onSubmit() {
    this.resetPassword(this.userEmail);
  }

  login() {
    this.router.navigate(['/login']);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  resetPassword(email: string) {
    // API-Endpunkt, der für das Zurücksetzen des Passworts zuständig ist
    const resetPasswordEndpoint = environment.backend + environment.url.forgotPassword;
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    
    this.http.post(resetPasswordEndpoint, { email: email })
      .subscribe({
        next: (response) => {
          // Erfolgsmeldung anzeigen
          this.showToast('Ein Link zum Zurücksetzen des Passworts wurde gesendet.', 'success');
          this.showResetPassword = false;
          this.showResetPassword2 = true;
          // Weitere Aktionen nach erfolgreichem Senden

        },
        error: (error) => {
          // Fehlermeldung anzeigen
          this.showToast('Fehler beim Senden des Links zum Zurücksetzen des Passworts.', 'danger');
          console.error(error);
          // Weitere Fehlerbehandlung
        }
      });
  }

  accessToken: number;

  // todo: verify email
  onSubmitAccessToken() {
    const submitAccessToken = environment.backend + environment.url.verifyEmail + this.accessToken;
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }

    this.http.get(submitAccessToken, { headers })
      .subscribe({
        next: (response) => {
          // Erfolgsmeldung anzeigen
          this.showToast('Verifikation erfolgreich!', 'success');
          this.showResetPassword = false;
          this.showResetPassword2 = false;
          this.showResetPassword3 = true;
          // Weitere Aktionen nach erfolgreichem Senden

        },
        error: (error) => {
          // Fehlermeldung anzeigen
          this.showToast('Fehler beim Senden des Links zum Zurücksetzen des Passworts.', 'danger');
          console.error(error);
          // Weitere Fehlerbehandlung
        }
      });
  }

  newPassword: string;
  newPasswordConfirm: string;
  onSubmitNewPassword() {
    if (this.newPassword != this.newPasswordConfirm) {
      this.showToast('Passwörter stimmen nicht überein!', 'danger');
      return;
    }
    console.log("newPassword: " + this.newPassword);
    console.log("newPasswordConfirm: " + this.newPasswordConfirm);
    
    const submitNewPassword = environment.backend + environment.url.resetPassword;
    const body = { newPassword: this.newPassword, email: this.userEmail };
    console.log(body);
    this.http.post<Response>(submitNewPassword, body)
      .subscribe({
        next: (response) => {
          // Erfolgsmeldung anzeigen
          this.showToast('Passwort erfolgreich geändert!', 'success');
          this.showResetPassword = false;
          this.showResetPassword2 = false;
          this.showResetPassword3 = false;
          this.showResetPassword4 = true;
          this.router.navigate(['/login']);
          // Weitere Aktionen nach erfolgreichem Senden
        },
        error: (error) => {
          // Fehlermeldung anzeigen
          this.showToast('Fehler beim Senden des Links zum Zurücksetzen des Passworts.', 'danger');
          console.error(error);
          // Weitere Fehlerbehandlung
        }
      });
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      // duration: 2000,
      position: 'bottom',
      buttons: [
        {
          role: 'cancel',
          text: 'schließen'
        }
      ],
      color: color,
    });
    toast.present();
  }
}
