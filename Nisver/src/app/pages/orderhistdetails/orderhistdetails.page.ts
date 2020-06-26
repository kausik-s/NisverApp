import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderhistdetails',
  templateUrl: './orderhistdetails.page.html',
  styleUrls: ['./orderhistdetails.page.scss'],
})
export class OrderhistdetailsPage implements OnInit {
  orderObj:any
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  customerid:any;

  constructor(private commonService:CommonService,
    private apiService:ApiService,public alertController: AlertController,private router: Router,private navCtrl: NavController) { }

  ngOnInit() {

    this.orderObj=this.commonService.getObject("order").then((res) => {

       this.orderObj=res;
      console.log(this.orderObj);
      // expected output: "Success!"
    });

    this.commonService.getObject("userid").then((res) => {

     this.customerid=res;
     // expected output: "Success!"
   });
    
    
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
    this.presentAlertRating();
  }
  

  submitRating()
  {
    this.commonService.showLoader();
    var formData: any = new FormData();
    formData.append("orderid",this.orderObj.orderid);
    formData.append("customerid",this.customerid);
    formData.append("rating",this.selectedValue);

   
   this.apiService.submitRatingForOrder(formData).subscribe((response) => {
      
     this.commonService.hideLoader();
      
      if(response['status']=="1")
      {
  
        this.commonService.showSuccess(response['message']);
        //this.router.navigate(['home/orderhistory'])
        this.navCtrl.navigateRoot('home/orderhistory');
      
      }
      else
      {
        this.commonService.showError(response['message']);
      }
    
  
  
    });

  }


  completeOrder()
  {
    this.commonService.showLoader();
  var formData: any = new FormData();
  formData.append("orderid",this.orderObj.orderid);
 
 this.apiService.completeOrder(formData).subscribe((response) => {
    
   this.commonService.hideLoader();
    
    if(response['status']=="1")
    {

      this.commonService.showSuccess(response['message']);
      this.router.navigate(['home/orderhistory'])
    
    }
    else
    {
      this.commonService.showError(response['message']);
    }
  


  });
    
  }

  proceedToComplete()
  {
    this.presentAlertConfirm();
  }



  async presentAlertRating() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want give '+this.selectedValue+' rating?',
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
            this.submitRating();
          }
        }
      ]
    });
  
    await alert.present();
  }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to complete this order?',
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
            this.completeOrder();
          }
        }
      ]
    });
  
    await alert.present();
  }

}
