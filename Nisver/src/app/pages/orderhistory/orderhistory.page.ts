import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {
orderStatus:any
userID:any
orderList:any
constructor(private apiService:ApiService,private commonService:CommonService,private router:Router,private menu:MenuController ){}
  ngOnInit() {


     this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userID=result['userid'];
     

  } );

    this.orderStatus=[
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
    this.getOrderByStatus($event.target.value);
  }

  getOrderByStatus(status)
  {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("customerid",this.userID );
      //formData.append("customerid","14");

      formData.append("status",status);
     this.apiService.getOrdersList(formData).subscribe((response) => {
        console.log(response);
       this.commonService.hideLoader();
        
        if(response['ordersList']!="")
        {

          this.orderList=response['ordersList'];
          this.commonService.showSuccess("Order Retrived successfully");
          
          
        }
        else
        {
          this.commonService.showError("No Data Found");
        }
  
  
      });
  }

}
