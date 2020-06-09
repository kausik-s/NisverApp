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
  /****geo location */
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  /*****geo location */
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  
 

  constructor(public formBuilder: FormBuilder,private http: HttpClient,public loadingController: LoadingController, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private toastController:ToastController,private commonService:CommonService,private router:Router,private sessionStorage:SessionStorageService,private apiservice:ApiService) { }

  ngOnInit() {
    this.getCategory();
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobileNo: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(4)]],
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
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      this.commonService.showSuccess("Please provide all the required values");
      this.postData();
      console.log(this.ionicForm.value);
      return false;
    } else {
      console.log(this.ionicForm.value);
      this.postData();
    }
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
    formData.append("currentaddress", this.ionicForm.get('currentAddress').value);
    formData.append("autoaddress", this.ionicForm.get('autoAddress').value);
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
        this.zoom = 12;
      });
    }
  }

  getCategory()
  {
    this.apiservice.getCategoryList(null).subscribe((response) => {
     console.log(response);
     this.categoryList=response['CategoryList'];
    });
  }

}
