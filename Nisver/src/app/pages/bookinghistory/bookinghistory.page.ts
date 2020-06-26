import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {  NavController } from '@ionic/angular';


@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.page.html',
  styleUrls: ['./bookinghistory.page.scss'],
})
export class BookinghistoryPage implements OnInit {
  bookingStatus:any
  userID:any
  bookingList:any

  constructor(private apiService:ApiService,private commonService:CommonService,private router:Router,private menu:MenuController,private navCtrl: NavController ){}
  ngOnInit() {

    this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userID=result['userid'];
      this.getBookingrByStatus("ALL");//initialy load all data
     

  } );

    this.bookingStatus=[
      {
        "key":"All",
        "value":"ALL"
      },
      {
        "key":"Completed",
        "value":"COMPLETED"
      },
      {
        "key":"In Progress",
        "value":"PROGRESS"
      },
      {
        "key":"Pending",
        "value":"PENDING"
      }
      ,
      {
        "key":"Cancelled",
        "value":"CANCELLED"
      }

    ];
    
  }

  selectStatus($event)
  {
    console.log("status of event"+$event.target.value);
    this.getBookingrByStatus($event.target.value);
  }


  getBookingrByStatus(status)
  {
      this.bookingList=[];//clearing the data
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("customerid",this.userID );
      //formData.append("customerid","14");

      formData.append("status",status);
     this.apiService.fetchBookingList(formData).subscribe((response) => {
        console.log(response);
       this.commonService.hideLoader();
        
        if(response['ordersList']!="")
        {

          this.bookingList=response['ordersList'];
          this.commonService.showSuccess("Booking Retrived successfully");
          
          
          
        }
        else
        {
          this.commonService.showError("No Data Found");
        }
  
  
      });
  }

  gotoBookingDetail(item)
  {
    console.log(JSON.stringify(item));
    this.commonService.setObject("booking",item);
    //this.router.navigateByUrl('home/bookinghistdetail');
    this.navCtrl.navigateRoot('home/bookinghistdetail');
  }

}
