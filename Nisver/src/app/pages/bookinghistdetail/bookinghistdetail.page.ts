import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookinghistdetail',
  templateUrl: './bookinghistdetail.page.html',
  styleUrls: ['./bookinghistdetail.page.scss'],
})
export class BookinghistdetailPage implements OnInit {
  bookingObj:any
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private commonService:CommonService,
    private apiService:ApiService,public alertController: AlertController,private router: Router,private navCtrl: NavController) { }

  ngOnInit() {

    this.bookingObj=this.commonService.getObject("booking").then((res) => {
     this.bookingObj=res;
     console.log(this.bookingObj);
     this.selectedValue=this.bookingObj['rating'];
     
   });
   
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

cancelBooking()
{
  this.presentAlertConfirm();
}


proccedToCancel()
{
  this.commonService.showLoader();
  var formData: any = new FormData();
  formData.append("orderid",this.bookingObj.orderid);
 
 this.apiService.cancelBooking(formData).subscribe((response) => {
    console.log(response);
   this.commonService.hideLoader();
    
    if(response['status']=="1")
    {

      this.commonService.showSuccess(response['message']);
      //this.router.navigate(['home/bookinghistory'])
      this.navCtrl.navigateRoot('home/bookinghistory');
    
    }
    else
    {
      this.commonService.showError(response['message']);
    }
  


  });
}
/*
async presentAlertPrompt() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'comments',
        type: 'text',
        placeholder: 'Enter your comments to cancel'
      }
      
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          console.log('Confirm Ok'+data.comments);
          if(data.comments!='')
          {
            console.log("data is not empty");
           
          }
          else
          {
            this.presentAlertPrompt();
            console.log("data is  empty");
            this.commonService.showError("Please enter your comments");
          }

        }
      }
    ]
  });

  await alert.present();
}
*/
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Are you sure you want to cancel this booking?',
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
          this.proccedToCancel();
        }
      }
    ]
  });

  await alert.present();
}




}
