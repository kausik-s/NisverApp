import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from '../../services/common.service';//common serviec
import { Plugins } from '@capacitor/core';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

const { Storage } = Plugins;
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,private commonService:CommonService,private apiService:ApiService) { }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      comments: ['', [Validators.required, Validators.maxLength(255)]]
     
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
    formData.append("feedback", this.ionicForm.get('comments').value);
    formData.append("rating", 4);
    let userData=this.getObject("userData");
    formData.append("userid",userData['userid']);
    this.apiService.addFeedback(formData).subscribe((response) => {
      console.log(response);
      this.commonService.hideLoader();
      
      if(response['status']==1)
      {
        this.commonService.showSuccess("Feedback submitted successfully");
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

}
