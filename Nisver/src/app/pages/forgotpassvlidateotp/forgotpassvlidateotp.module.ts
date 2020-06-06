import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassvlidateotpPageRoutingModule } from './forgotpassvlidateotp-routing.module';

import { ForgotpassvlidateotpPage } from './forgotpassvlidateotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassvlidateotpPageRoutingModule
  ],
  declarations: [ForgotpassvlidateotpPage]
})
export class ForgotpassvlidateotpPageModule {}
