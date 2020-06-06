import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedbacktab',
  templateUrl: './feedbacktab.page.html',
  styleUrls: ['./feedbacktab.page.scss'],
})
export class FeedbacktabPage implements OnInit {
  feedBackList:any
  

  constructor(private router:Router,private apiService:ApiService,private commonService:CommonService ) { }

  ngOnInit() {
    this.getfeedbacklist();
  }
  getfeedbacklist()
  {
    this.apiService.getfeedbackList(null).subscribe((response) => {
     console.log(response);
     this.feedBackList=response['feedback'];
    });
  }
}
