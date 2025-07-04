import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone,  ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';//common serviec
import { Plugins } from '@capacitor/core';
import { ApiService } from '../../services/api.service';
const { Storage } = Plugins;
import { Router } from '@angular/router';
//import {} from '@types/googlemaps';
//import { } from 'googlemaps';
import { google } from "google-maps";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  description:string;
  file: File;
  bestWorkFile:File;
  userID:string;
  disabled:boolean;
  picToView:string;
  ionicForm: FormGroup;
  loaderToShow: any;
  isSubmitted = false;
  categoryList:any
  autoAddressbyApi:any
  currentAddressApi:any
  existingCurrentAddress:any
  test:any
  enableOther:boolean
  /****geo location */
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  /*****geo location */
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  
 

  constructor(private router:Router,public formBuilder: FormBuilder,private http: HttpClient,public loadingController: LoadingController, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private toastController:ToastController,private commonService:CommonService,private apiservice:ApiService) { }

  

  ngOnInit() {
   
    
    this.getCategory()
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobileNo: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      altMobileNo:['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      category:['', [Validators.required]],
      profession:['', [Validators.required]],
      maritalStatus:['', [Validators.required]],
      gender:['', [Validators.required]],
      currentAddress:['', [Validators.required]],
      autoAddress:['', [Validators.required]]
  
        
    })
    

    
   
 

     /******map****/
   //set google maps defaults
   this.zoom = 4;
   this.latitude = 22.5726;
   this.longitude = 88.3639;
   
   //create search FormControl
   this.searchControl = new FormControl();
   
   //set current position
  // this.setCurrentPosition();
   
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
         
         this.currentAddressApi=autocomplete.getPlace().formatted_address;
         console.log("place changed"+this.currentAddressApi);
         //set latitude, longitude and zoom
         this.latitude = place.geometry.location.lat();
         this.longitude = place.geometry.location.lng();
         this.zoom = 12;
       });
     });
   });

  }

  submitForm() {
    
    this.isSubmitted = true;


    if(this.ionicForm.get("name").hasError('required')||this.ionicForm.get("name").hasError('minLength')
    ||this.ionicForm.get("mobileNo").hasError('required')||this.ionicForm.get("mobileNo").hasError('pattern')
    ||this.ionicForm.get("mobileNo").hasError('minLength')||this.ionicForm.get("mobileNo").hasError('maxLength')
    ||this.ionicForm.get("email").hasError('required')
    ||this.ionicForm.get("email").hasError('pattern')
    ||this.ionicForm.get("category").hasError('required')
    ||this.ionicForm.get("maritalStatus").hasError('required') 
    ||this.ionicForm.get("gender").hasError('required') 
    )
    {
      console.log("form has error");
      return;
    }
    else
    {
      //proceed to form submit
     
       
      if(this.ionicForm.get('category').value==1&&this.ionicForm.get('profession').value=='')
      {
        this.commonService.showError("Please enter your profession");
        return;
      }
        
      //proceed to form submmit
      this.postData();
  }
  }
  
 changeListener($event) : void {
    this.file = $event.target.files[0];
  }

  filechangeListener($event) : void {
    this.bestWorkFile = $event.target.files[0];
  }
  
  addBestWork()
  {
    this.commonService.showLoader();
    var formData: any = new FormData();
    this.locate()
    if(!this.description)
    {
      this.commonService.showError("Please enter descrription");
      return;
    }
    
    formData.append("userid", this.userID);
    formData.append("description", this.description);
    formData.append("location",this.autoAddressbyApi);
    formData.append("image", this.bestWorkFile);
    
    this.commonService.showLoader();
      this.apiservice.addbestwork(formData).subscribe((response) => {
      console.log(response);
      this.commonService.hideLoader();
      
      if(response['status']==1)
      {
        this.commonService.showSuccess(response['message']);
       
      }
      else
      {
        this.commonService.showError(response['message']);
      }


    });
   
  }

  postData()
  {
    this.commonService.showLoader();
    var formData: any = new FormData();
 
    formData.append("name", this.ionicForm.get('name').value);
    formData.append("userid", this.userID);
    formData.append("alt_mobile", this.ionicForm.get('altMobileNo').value);
    formData.append("email", this.ionicForm.get('email').value);
    formData.append("category", this.ionicForm.get('category').value);
    formData.append("profession", this.ionicForm.get('profession').value);
    formData.append("marital_status", this.ionicForm.get('maritalStatus').value);
    formData.append("gender", this.ionicForm.get('gender').value);
    if(!this.currentAddressApi)
    {
      this.currentAddressApi=this.existingCurrentAddress;
    }
    formData.append("currentaddress", this.currentAddressApi);
    formData.append("autoaddress", this.autoAddressbyApi);
    //formData.append("latitude", this.latitude);
    //formData.append("longitude", this.longitude);
    
    formData.append("Image", this.file);
  
      this.apiservice.updateProfile(formData).subscribe((response) => {
      console.log(response);
      this.commonService.hideLoader();
      
      if(response['status']==1)
      {
        this.commonService.showSuccess("Profile updated sucessfully");
        if(localStorage.getItem("user_type")==="ADMIN")
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
  

  getBestWorkListing()
  {
    this.commonService.showLoader();
    var formData: any = new FormData();
    formData.append("userid", this.userID);

  }
  
  enableEditMode()
  {
    this.disabled=false;
  }
  
  get errorControl() {
    return this.ionicForm.controls;
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }


  async getObject(key:string) {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }

  getCategory()
  {
    this.apiservice.getCategoryList(null).subscribe((response) => {
     console.log(response);
     this.categoryList=response['CategoryList'];

     this.commonService.getObject("userData").then((result) => {
      console.log(result); 
      this.userID=result['userid'];
      this.picToView=result['user_profile'];
      this.disabled=true;
      console.log(result['user_profile']);
   
      console.log("category"+result['user_category']);
      this.autoAddressbyApi=result['user_autoaddress'];
      this.existingCurrentAddress=result['user_currentaddress'];
      this.ionicForm.setValue({name:result['user_name'], mobileNo: result['user_mobile'],
      altMobileNo:result['user_altmobile'],email:result['user_email'],category:result['user_category'],profession:result['user_proffesion'],
      maritalStatus:result['user_marital_status'],gender:result['user_gender'],currentAddress:result['user_currentaddress'],autoAddress:result['user_autoaddress']});
    

  } );

    });
  }

  selectCategory($event)
    {
      //for condition 1
      if($event.target.value==1)
      {
          this.enableOther=true;
      }
      else
      {
        this.enableOther=false;
      }
       
    }

    locate()
    {
      //this.getCurrentPosition();
      //reverse geo coding
      var geocoder = new google.maps.Geocoder;
      var latlng = {lat: this.latitude, lng:this.longitude};
      var self = this;
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            
           self.ngZone.run(() => {

              //console.log(results[0].formatted_address);
              self.autoAddressbyApi=results[0].formatted_address;
          
           console.log("address"+self.autoAddressbyApi);
            
           });
          

           
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
   

    }

}
