import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from '../../services/common.service';//common serviec
import { Plugins } from '@capacitor/core';
import { ApiService } from '../../services/api.service';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

const { Storage } = Plugins;
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  userID:any;

  constructor(private router:Router,public formBuilder: FormBuilder,private commonService:CommonService,private apiService:ApiService) { }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      comments: ['', [Validators.required, Validators.maxLength(255)]]
     
    })

    this.commonService.getObject("userData").then((result) => {
      
      this.userID=result['userid'];
     
     

  } );
  }

  submitFeedback()
  {
    if (!this.ionicForm.valid)
    {
      this.commonService.showError("Please provide valid data");
      return;
    }
    if(!this.selectedValue)
    {
      this.commonService.showError("Please select rating between 1 to 5");
      return;
    }
    this.isSubmitted=true;
    this.commonService.showLoader();
    var formData: any = new FormData();
    formData.append("feedback", this.ionicForm.get('comments').value);
    formData.append("userid",this.userID);
    formData.append("rating",this.selectedValue);
    formData.append("customerid",0);

    this.apiService.addFeedback(formData).subscribe((response) => {
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

  async getObject(key:string) {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }

  
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
    
  }

}
