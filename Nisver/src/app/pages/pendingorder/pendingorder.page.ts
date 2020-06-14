import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pendingorder',
  templateUrl: './pendingorder.page.html',
  styleUrls: ['./pendingorder.page.scss'],
})
export class PendingorderPage implements OnInit {
  userID:any
  orderList:any
  constructor(private apiService:ApiService,private commonService:CommonService,private router:Router,private menu:MenuController ) { 
    
    this.menu.enable(true, 'first');
    
  }
  

  ngOnInit() {
    this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userID=result['userid'];
      this.getPendingOrderList()

  } );
  }


  getPendingOrderList()
  {
      this.commonService.showLoader();
      var formData: any = new FormData();
      //formData.append("customerid",this.userID );
      formData.append("customerid","14");

      formData.append("status","PENDING");
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
          this.router.navigate(['/home'])
          
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
          this.router.navigate(['/home'])
          
        }
        else
        {
          this.commonService.showError("Error in accepting order");
        }
  
  
      });

  }


}
