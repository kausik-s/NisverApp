import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone,  ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-vendorsearch',
  templateUrl: './vendorsearch.page.html',
  styleUrls: ['./vendorsearch.page.scss'],
})
export class VendorsearchPage implements OnInit {
  categoryList:any
  vendorData:any
  userID:string
  location:String
  categoryId:number
  /****geo location */
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  /*****geo location */
  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(private router:Router,private apiService:ApiService,private commonService:CommonService,private menu: MenuController,public ngZone: NgZone,private mapsAPILoader: MapsAPILoader ) { 
  //this.menu.enable(true, 'start');
    
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

    /*******location suggestion*****/
       
   /******map****/
   //set google maps defaults
   this.zoom = 4;
   this.latitude = 22.5726;
   this.longitude = 88.3639;
   
   //create search FormControl
   this.searchControl = new FormControl();
   
   //set current position
   //this.setCurrentPosition();
   
   //load Places Autocomplete
   this.mapsAPILoader.load().then(() => {
   var nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
   
   //var nativeHomeInputBox;
    /*
     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
       types: ["address"]
     });*/

     let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
      types: ["address"]
    });
     autocomplete.addListener("place_changed", () => {
       this.ngZone.run(() => {
         //get the place result
         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
         //verify result
         if (place.geometry === undefined || place.geometry === null) {
           return;
         }
         this.location=autocomplete.getPlace().formatted_address;
         console.log("place changed"+this.location);
        
         //set latitude, longitude and zoom
         this.latitude = place.geometry.location.lat();
         this.longitude = place.geometry.location.lng();
         this.zoom = 12;
       });
     });

       //reverse geo coding
     



   });



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
