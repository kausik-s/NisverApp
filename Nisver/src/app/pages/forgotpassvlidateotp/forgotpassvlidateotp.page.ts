import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';
import { CommonService } from '../../services/common.service';//common serviec
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-forgotpassvlidateotp',
  templateUrl: './forgotpassvlidateotp.page.html',
  styleUrls: ['./forgotpassvlidateotp.page.scss'],
})
export class ForgotpassvlidateotpPage implements OnInit {
otp:any
  constructor(private router:Router,private commonService:CommonService,private authService:AuthService,private sessionStorage:SessionStorageService) {}

  

  ngOnInit() {
    console.log(this.sessionStorage.getData("mobile"))
  }


  validateotp()
  {
    if(this.otp)
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("mobile_no",this.sessionStorage.getData("mobile"));
      formData.append("otp",this.otp);
      
      this.authService.validateForgotPasswordOTP(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("OTP is validated successfully");
          this.router.navigate(['/resetpassword'])
          
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
