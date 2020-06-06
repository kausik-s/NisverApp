import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';//common serviec
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  mobileNo:any
  constructor(private router:Router,private commonService:CommonService,private authService:AuthService,private sessionStorage:SessionStorageService) {}

  ngOnInit() {
  }

  forgotpassword()
  {
    if(this.mobileNo)
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("mobile_no",this.mobileNo);
      
      this.authService.forgotpassword(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("OTP is sent to your mobile number.");
          //this.sessionStorage.mobileNo=this.mobileNo;
          this.sessionStorage.setData("mobile",this.mobileNo);
          this.router.navigate(['/forgotpassvlidateotp'])
          
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });
      
     
    }
    else
    {
      this.commonService.showError("Please enter your mobile number");
    }
  }

}
