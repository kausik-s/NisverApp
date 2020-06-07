import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';//common serviec
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  newpassword:string
  confmpassword:string
  oldpassword:string
  constructor(private router:Router,private commonService:CommonService,private authService:AuthService,private sessionStorage:SessionStorageService) {}


  ngOnInit() {
  }

  changePassword()
  {


    if(!this.oldpassword)
    {
      this.commonService.showError("Please enter your old password");
      return;
    }
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
      this.commonService.showError("Password did not match.Please check");

    }
    else
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("customerid", this.sessionStorage.getData("userId"));
      formData.append("new_password", this.newpassword);
      formData.append("old_password", this.oldpassword);

      this.authService.changePassword(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          this.commonService.showSuccess("Your password has been changed sucessfully");
         if(localStorage.getItem("user_type")=="ADMIN")
         this.router.navigate(['/dashboard'])
         else
          this.router.navigate(['/home'])
          
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });
      

    }

    

  }

}
