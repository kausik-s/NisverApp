
  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from '../../services/common.service';//common serviec
import { Plugins } from '@capacitor/core';
import { ApiService } from '../../services/api.service';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
})
export class AddcategoryPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private router:Router,public formBuilder: FormBuilder,private commonService:CommonService,private apiService:ApiService,private sessionstorage:SessionStorageService) { }


  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      catname: ['', [Validators.required, Validators.maxLength(50)]]
     
    })
  }
  submitFeedback()
  {
    if (!this.ionicForm.valid)
    {
      this.commonService.showError("Please provide valid data");
      return;
    }
    this.isSubmitted=true;
    this.commonService.showLoader();
    var formData: any = new FormData();
    formData.append("category_name", this.ionicForm.get('catname').value);
  
    formData.append("userid",this.sessionstorage.getData("userId"));
    this.apiService.addCategory(formData).subscribe((response) => {
      console.log(response);
      this.commonService.hideLoader();
      
      if(response['status']==1)
      {
        this.commonService.showSuccess(response['message']);
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

  get errorControl() {
    return this.ionicForm.controls;
  }

  trackValueChange()
  {
    this.isSubmitted=true;
  }

  

}

