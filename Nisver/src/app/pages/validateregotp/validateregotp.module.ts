import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateregotpPageRoutingModule } from './validateregotp-routing.module';

import { ValidateregotpPage } from './validateregotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateregotpPageRoutingModule
  ],
  declarations: [ValidateregotpPage]
})
export class ValidateregotpPageModule {}
