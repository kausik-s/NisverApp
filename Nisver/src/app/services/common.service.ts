import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loaderToShow: any;
  constructor(private toastController:ToastController,private loadingController:LoadingController) {}

    
   /****show messagre */

 async showSuccess(msg)
 {
   const toast = await this.toastController.create({
     message: msg,
     color:"success",
     position:'top',
     duration: 2000
   });
   toast.present();
 }

 async showError(msg)
 {
   const toast = await this.toastController.create({
     message: msg,
     color:"danger",
     position:'top',
     duration: 2000
   });
   toast.present();
 }

 /*****show loader */
 showLoader() {
  this.loaderToShow = this.loadingController.create({
    message: 'Please wait..'
  }).then((res) => {
    res.present();

    res.onDidDismiss().then((dis) => {
      console.log('Loading dismissed!');
    });
  });
  
}

hideLoader() {
    this.loadingController.dismiss();
}


}
