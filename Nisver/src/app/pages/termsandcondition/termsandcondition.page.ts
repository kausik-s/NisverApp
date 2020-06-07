import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';//common serviec
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.page.html',
  styleUrls: ['./termsandcondition.page.scss'],
})
export class TermsandconditionPage implements OnInit {
  data: string;
  constructor(private apiService:ApiService,private commonService:CommonService) { }


  ngOnInit() {
    this.displaytermsandcondition();
  }

  displaytermsandcondition()
  {

    
    this.apiService.displayTermsAndCondition(null).subscribe((response) => {
    console.log(response);
     
      this.data=response['description'];
     


    });
  }

}
