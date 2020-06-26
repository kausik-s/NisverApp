import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingorderdetail',
  templateUrl: './pendingorderdetail.page.html',
  styleUrls: ['./pendingorderdetail.page.scss'],
})
export class PendingorderdetailPage implements OnInit {
  orderObj:any
  
  constructor(private commonService:CommonService,
    private apiService:ApiService,public alertController: AlertController,private router: Router,private navCtrl: NavController) { }
  ngOnInit() {

    this.orderObj=this.commonService.getObject("order").then((res) => {

      this.orderObj=res;
     console.log(this.orderObj);
     // expected output: "Success!"
   });
  }

  acceptOrder(item:any)
  {
    console.log("selection changes"+JSON.stringify(item));
    
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("orderid",item['orderid']);
      formData.append("order_status","1");
     this.apiService.acceptOrRejectOrder(formData).subscribe((response) => {
        console.log(response);
       this.commonService.hideLoader();
        if(response['status']==1)
        {

          
          this.commonService.showSuccess("Order accpted successfully");
          this.navCtrl.navigateRoot('/home');
        }
        else
        {
          this.commonService.showError("Error in accepting order");
         
        }
  
  
      });


  }

  rejectOrder(item:any)
  {
    console.log("selection changes"+JSON.stringify(item));
    this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("orderid",item['orderid']);
      formData.append("order_status","0");
     this.apiService.acceptOrRejectOrder(formData).subscribe((response) => {
        console.log(response);
       this.commonService.hideLoader();
        if(response['status']==1)
        {

          
          this.commonService.showSuccess("Order rejected successfully");
          this.navCtrl.navigateRoot('/home');
         
          
        }
        else
        {
          this.commonService.showError("Error in accepting order");
        }
  
  
      });

  }


   
  async acceptAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to accept this order?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.acceptOrder(this.orderObj)
            
          }
        }
      ]
    });
  
    await alert.present();
  }


  async rejectAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to reject this order?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.rejectOrder(this.orderObj)
            
          }
        }
      ]
    });
  
    await alert.present();
  }


}
