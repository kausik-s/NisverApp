import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';//common serviec
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  newpassword:string
  confmpassword:string
  constructor(private router:Router,private commonService:CommonService,private authService:AuthService,private sessionStorage:SessionStorageService) {}

  ngOnInit() {
  }


  resetPassword()
  {
    if(!this.newpassword)
    {
      this.commonService.showError("Please enter new password");
      return;
    }
    if(!this.confmpassword)
    {
      this.commonService.showError("Please confirm password");
      return;
    }

    if(this.newpassword!=this.confmpassword)
    {
      this.commonService.showError("Password does not match.Please check");

    }
    else
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("mobile_no", this.sessionStorage.getData("mobile"));
      formData.append("password", this.newpassword);
      
      this.authService.resetPassword(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("Password rest sucessfull.Please login using new password");
         
          this.router.navigate(['/'])
          
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });
      

    }

    

  }

}
