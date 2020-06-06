import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.page.html',
  styleUrls: ['./custdetails.page.scss'],
})
export class CustdetailsPage implements OnInit {
  userid:String
  name:any
  user_mobile:String
  user_email:string
  user_gender:string
  user_altmobile:string
  user_proffesion:string
  user_distance:string
  user_addedon:string
  user_currentaddress:string
  user_marital_status:string
  user_profile:string
  constructor(private router:Router,private apiService:ApiService,private commonService:CommonService )  {  this.commonService.getObject("cuslist").then((result) => {
   this.user_profile=result['user_profile'];
    this.name=result['user_name'];
    this.user_mobile=result['user_mobile'];
    this.user_email=result['user_email'];
    this.user_gender=result['user_gender'];
    this.user_altmobile=result['user_altmobile'];
    this.user_proffesion=result['user_proffesion'];
    this.user_distance=result['user_distance'];
    this.user_addedon=result['user_addedon'];
    this.user_currentaddress=result['user_currentaddress']
    this.user_marital_status=result['user_marital_status']
    this.userid=result['userid']
});
}

  ngOnInit() {
    }
  submitBlock()
  {
   
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("customerid", this.userid);
      formData.append("status ",1);
      this.apiService.setBlockUnblock(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("User blocked sucessfully");
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });

  }
  submitUnblock()
  {
   
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("customerid", this.userid);
      formData.append("status ",0);
      this.apiService.setBlockUnblock(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("User blocked sucessfully");
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });

  }
}
