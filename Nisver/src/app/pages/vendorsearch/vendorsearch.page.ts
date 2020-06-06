import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendorsearch',
  templateUrl: './vendorsearch.page.html',
  styleUrls: ['./vendorsearch.page.scss'],
})
export class VendorsearchPage implements OnInit {
  categoryList:any
  vendorData:any
  userID:string
  latitude:string
  longitude:String
  location:String
  categoryId:number
  constructor(private router:Router,private apiService:ApiService,private commonService:CommonService,private menu: MenuController ) { 
  this.menu.enable(true, 'start');
    
  }

  ngOnInit() {
    this.getCategory();
    this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userID=result['userid'];
      this.latitude=result['user_latitude'];
      this.longitude=result['user_longitude'];
      this.location=result['user_currentaddress'];
    
  } );
  }


    getCategory()
    {
      this.apiService.getCategoryList(null).subscribe((response) => {
       console.log(response);
       this.categoryList=response['CategoryList'];
      });
    }

    selectCategory($event)
    {
       console.log("selection changes"+$event.target.value);
       this.categoryId=$event.target.value;
       this.displayVendors();
    }
    displayVendors()
    {
      this.commonService.showLoader();
      var formData: any = new FormData();
      formData.append("userid",this.userID );
      formData.append("categoryid",this.categoryId);
      formData.append("location",this.location );
      formData.append("latitude",this.latitude);
      formData.append("longitude",this.longitude);

      this.apiService.searchVendorList(formData).subscribe((response) => {
        console.log(response);
        this.commonService.hideLoader();
        
        if(response['status']==1)
        {

          this.vendorData=response['searchList'];
          this.commonService.showSuccess("Retrived data sucessfully");
          
        }
        else
        {
          this.commonService.showError(response['message']);
        }
  
  
      });
      
    }

    viewVendorDetails(item:any)
    {
      console.log(JSON.stringify(item));
      this.commonService.setObject("vendor",item);
      this.router.navigateByUrl('/home/booking');
    }


}
