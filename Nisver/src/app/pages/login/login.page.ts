import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { LoadingController, ToastController } from '@ionic/angular';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  constructor(private router: Router,private authService:AuthService,public formBuilder: FormBuilder,private commonService:CommonService) { }

  ngOnInit() {
     
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required,Validators.minLength(4)]]
  
    })

  }

  
  


  login() {
    
    this.commonService.showLoader();
    var formData: any = new FormData();

    formData.append("mobile", this.ionicForm.get('username').value);
    formData.append("password", this.ionicForm.get('password').value);
    formData.append("token","xxxxxxxxxxx");

    this.authService.login(formData).subscribe((response) => {
      console.log(response);
      this.commonService.hideLoader();
      
      if(response['status']==1)
      {
        this.commonService.setObject("userData",response)
        this.router.navigate(['/home'])
      }
      else
      {
        this.commonService.showError(response['message']);
      }


    });
  }

 

}
