import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustdetailsPageRoutingModule } from './custdetails-routing.module';

import { CustdetailsPage } from './custdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustdetailsPageRoutingModule
  ],
  declarations: [CustdetailsPage]
})
export class CustdetailsPageModule {}
