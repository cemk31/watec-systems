import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-forgotten-password-page',
  templateUrl: './forgotten-password-page.html',
  styleUrls: ['./forgotten-password-page.scss'],
})
export class ForgottenPasswordPage {

  userEmail: string;

  constructor(private http: HttpClient, private toastController: ToastController) { }

  onSubmit() {
    this.resetPassword(this.userEmail);
  }

  resetPassword(email: string) {
    // API-Endpunkt, der für das Zurücksetzen des Passworts zuständig ist
    const resetPasswordEndpoint = environment.backend + environment.url.resetPassword;

    this.http.post(resetPasswordEndpoint, { email: email })
      .subscribe({
        next: (response) => {
          // Erfolgsmeldung anzeigen
          this.showToast('Ein Link zum Zurücksetzen des Passworts wurde gesendet.');
          // Weitere Aktionen nach erfolgreichem Senden
        },
        error: (error) => {
          // Fehlermeldung anzeigen
          this.showToast('Fehler beim Senden des Links zum Zurücksetzen des Passworts.');
          console.error(error);
          // Weitere Fehlerbehandlung
        }
      });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      // duration: 2000,
      position: 'bottom',
      buttons: [
        {
          role: 'cancel',
          text: 'schließen'
        }
      ]
    });
    toast.present();
  }
}
