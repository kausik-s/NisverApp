import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  htmlStr: string;
  constructor(private apiService:AuthService,private commonService:CommonService) { }


  ngOnInit() {
    this.displayPrivacyPolicy();
  }



  displayPrivacyPolicy()
    {

      
      this.apiService.fecthPrivacyPolicyContent(null).subscribe((response) => {
        console.log(response);
       
        this.htmlStr=response['description'];
       
  
  
      });
    }

}
