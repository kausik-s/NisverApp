import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
@Component({
  selector: 'app-custtab',
  templateUrl: './custtab.page.html',
  styleUrls: ['./custtab.page.scss'],
})
export class CusttabPage implements OnInit {
  custJsonList:any
  vendorid:any
 
  constructor(private router:Router,private apiService:ApiService,private commonService:CommonService ) { 
   
  }

  ngOnInit() {
    this.getfeedbacklist();
  }
  getfeedbacklist()
  {
    this.apiService.getCustomerList(null).subscribe((response) => {
     console.log(response);
     this.custJsonList=response['customerList'];
    });
  }

  viewcuslistDetails(item:any)
  {
    console.log(JSON.stringify(item));
    this.commonService.setObject("cuslist",item);
    this.router.navigateByUrl('custdetails');
  }
}
