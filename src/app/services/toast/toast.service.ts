import { ToastController } from '@ionic/angular';

export class ToastService {
    constructor(private toastController: ToastController) {}

    async presentToast(message: string, duration: number = 3000, color: string = 'success') {
        const toast = await this.toastController.create({
            message: message,
            duration: duration,
            position: 'top',
            color: 'success'
        });
        toast.present();
    }
}
