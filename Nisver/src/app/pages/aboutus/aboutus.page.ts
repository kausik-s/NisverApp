import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  
  data: string;
  constructor(private apiService:AuthService,private commonService:CommonService) { }

  ngOnInit() {
   
    this.displayAboutUs();
    
  }

  displayAboutUs()
    {

      
      this.apiService.fecthAboutusContent(null).subscribe((response) => {
        console.log(response);
       
        this.data=response['description'];
       
  
  
      });



      /*
      this.apiService.fecthAboutusContent(null).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {
          console.log("success");
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
      }
    }
*/
  
  }

}