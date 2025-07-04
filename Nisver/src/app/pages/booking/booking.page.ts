import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';
 


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  comments:string
  profileImg:any
  vendorData:{}
  userid:any
  vendorid:any
  name:any
  user_mobile:String
  user_email:string
  user_gender:string
  user_altmobile:string
  user_proffesion:string
  user_distance:string
  user_addedon:string
  user_currentaddress:string
  user_autoaddress:string
  user_marital_status:string
  hidemobile:boolean
  constructor(private router:Router,private location:Location,private commonService:CommonService,
    private apiService:ApiService,private navCtrl: NavController) {
    this.commonService.getObject("vendor").then((result) => {
      //console.log("vendor data"+JSON.stringify(result)); 
      //this.vendorData=result;
      this.profileImg=result['user_profile'];
      this.name=result['user_name'];
      this.user_mobile=result['user_mobile'];
      this.user_email=result['user_email'];
      this.user_gender=result['user_gender'];
      this.user_altmobile=result['user_altmobile'];
      this.user_proffesion=result['user_proffesion'];
      this.user_distance=result['user_distance'];
      this.user_addedon=result['user_addedon'];
      this.user_currentaddress=result['user_currentaddress']
      this.vendorid=result['customerid']
      this.user_marital_status=result['user_marital_status']
      this.user_autoaddress=result['user_autoaddress']
      
      //HIDE MOBILE FOR FEMALE AND UNMARRIED VENDOR
      if(this.user_gender=='FEMALE'&&this.user_marital_status=='UNMARRIED')
       this.hidemobile=true;
   
  });
  }

  ngOnInit() {
           
    this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userid=result['userid'];
      
    

  } );
    

    
  }
  
  submitBooking()
  {
    
    if(!this.comments)
    {
      this.commonService.showError("Please insert your comments");
    }
    else
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("senderid", this.userid);
      formData.append("receiverid",this.vendorid);
      formData.append("comments", this.comments);
      this.apiService.bookOrder(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("Order booked sucessfully");
          //this.router.navigate(['home/vendorsearch'])
          this.navCtrl.navigateRoot('home/vendorsearch');
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });

    }
  }
}
