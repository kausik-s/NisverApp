import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { AgmCoreModule } from '@agm/core';


import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn7mYIZlP-jAqfH6xFXqrmRmFaczK0_Ak',
      libraries: ["places"]
    }),
    CommonModule,
      IonicModule,
      ReactiveFormsModule,
      FormsModule,
    //  FormGroup,
     // FormBuilder,
    //  Validators,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}


  
 


