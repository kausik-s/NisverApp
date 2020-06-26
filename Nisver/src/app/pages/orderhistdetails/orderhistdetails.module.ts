import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderhistdetailsPageRoutingModule } from './orderhistdetails-routing.module';

import { OrderhistdetailsPage } from './orderhistdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderhistdetailsPageRoutingModule
  ],
  declarations: [OrderhistdetailsPage]
})
export class OrderhistdetailsPageModule {}
