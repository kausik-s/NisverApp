import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from '../../model/session-storage.service';
import { CommonService } from '../../services/common.service';//common serviec
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validateregotp',
  templateUrl: './validateregotp.page.html',
  styleUrls: ['./validateregotp.page.scss'],
})
export class ValidateregotpPage implements OnInit {

  otp:any
  constructor(private router:Router,private commonService:CommonService,private authService:AuthService,private sessionStorage:SessionStorageService) {}

  


  ngOnInit() {
  }

  validateotp()
  {
    if(this.otp)
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("mobile",this.sessionStorage.getData("mobile"));
      formData.append("otp",this.otp);
      
      this.authService.validateRegOtp(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("OTP is validated successfully.Please login");
          this.router.navigate(['/'])
          
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });
      
     
    }
    else
    {
      this.commonService.showError("Please enter otp");
    }
  }

}
