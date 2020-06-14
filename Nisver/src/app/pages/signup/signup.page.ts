import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone,  ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';//common serviec
import { Router } from '@angular/router';
import {SessionStorageService} from '../../model/session-storage.service';
import { google } from "google-maps";
import { ApiService } from 'src/app/services/api.service';
import { Plugins } from '@capacitor/core';


const { Geolocation } = Plugins;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  categoryList:any
  ionicForm: FormGroup;
  loaderToShow: any;
  isSubmitted = false;
  autoAddressbyApi:any
  currentAddressApi:any
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
  
  
 

  constructor(public formBuilder: FormBuilder,private http: HttpClient,public loadingController: LoadingController, private mapsAPILoader: MapsAPILoader,
    public ngZone: NgZone,private toastController:ToastController,private commonService:CommonService,private router:Router,private sessionStorage:SessionStorageService,private apiservice:ApiService) { }

  ngOnInit() {
    this.getCategory();
     this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobileNo: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(4)]],
      repassword: ['', [Validators.required,Validators.minLength(4)]],
      altMobileNo:['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      category:['', [Validators.required]],
      profession:['', [Validators.required]],
      maritalStatus:['', [Validators.required]],
      gender:['', [Validators.required]],
      currentAddress:['', [Validators.required]]
      
    })
   
    /*
    ,
      currentAddress:['', [Validators.required]],
      autoAddress:['', [Validators.required]]
      */
    
    

    this.enableOther=false;
    
   /******map****/
   //set google maps defaults
   this.zoom = 4;
   this.latitude = 22.5726;
   this.longitude = 88.3639;
   
   //create search FormControl
   this.searchControl = new FormControl();
   
   //set current position
   this.setCurrentPosition();
   
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

      


       //reverse geo coding
     



   });



   
  }
  
  submitForm() {
    
    this.isSubmitted = true;


    if(this.ionicForm.get("name").hasError('required')||this.ionicForm.get("name").hasError('minLength')
    ||this.ionicForm.get("mobileNo").hasError('required')||this.ionicForm.get("mobileNo").hasError('pattern')
    ||this.ionicForm.get("mobileNo").hasError('minLength')||this.ionicForm.get("mobileNo").hasError('maxLength')
    ||this.ionicForm.get("password").hasError('required')||this.ionicForm.get("password").hasError('minLength')
    ||this.ionicForm.get("repassword").hasError('required')
    ||this.ionicForm.get("repassword").hasError('minLength')
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
      if(this.ionicForm.get('password').value!==this.ionicForm.get('repassword').value)
      {
        this.commonService.showError("Password and Re-password did not match");
        return;
      }
       
      if(this.ionicForm.get('category').value==1&&this.ionicForm.get('profession').value=='')
      {
        this.commonService.showError("Please enter your profession");
        return;
      }
        
      //proceed to form submmit
      this.postData();
    }
   
    /*
    if (!this.ionicForm.valid) {

      console.log('Please provide all the required values!');
      console.log(this.test);
      this.commonService.showSuccess("Please provide all the required values");
      this.postData();
      return false;

    } else {
      console.log(this.ionicForm.value);
      this.commonService.showSuccess("form is valid");
     // this.postData();
    }
    */
  }

  postData()
  {
    this.commonService.showLoader();
    var formData: any = new FormData();
    formData.append("name", this.ionicForm.get('name').value);
    formData.append("mobile", this.ionicForm.get('mobileNo').value);
    formData.append("password", this.ionicForm.get('password').value);
    formData.append("alt_mobile", this.ionicForm.get('altMobileNo').value);
    formData.append("email", this.ionicForm.get('email').value);
    formData.append("category", this.ionicForm.get('category').value);
    formData.append("profession", this.ionicForm.get('profession').value);
    formData.append("marital_status", this.ionicForm.get('maritalStatus').value);
    formData.append("gender", this.ionicForm.get('gender').value);
    formData.append("currentaddress", this.currentAddressApi);
    formData.append("autoaddress", this.autoAddressbyApi);
    formData.append("latitude", this.latitude);
    formData.append("longitude", this.longitude);
    

    
    
    
  
    this.http.post('http://nisver.com/addon/api/registration.php',formData,{responseType: 'json'}).subscribe(
      (response) => {
        this.commonService.hideLoader();
        console.log(response);
        
        if(response['status']==1)
        {
          this.commonService.showSuccess(response['message']);
 		  this.sessionStorage.setData("mobile",this.ionicForm.get('mobileNo').value);
          this.router.navigate(['/validateregotp'])
        }
        else
        {
          this.commonService.showError(response['message']);
        }
      },
      (error) =>{
        console.log(error);
        this.commonService.showError(error);
      } 
    )
  }

  

  
  get errorControl() {
    return this.ionicForm.controls;
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
        this.zoom = 12;
      });
    }

    
  }

  //capacitor current position
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  getCategory()
  {
    this.apiservice.getCategoryList(null).subscribe((response) => {
     console.log(response);
     this.categoryList=response['CategoryList'];
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
