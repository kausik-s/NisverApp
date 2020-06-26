import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinghistdetailPageRoutingModule } from './bookinghistdetail-routing.module';

import { BookinghistdetailPage } from './bookinghistdetail.page';
import {CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { StarRatingModule } from 'ionic5-star-rating';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinghistdetailPageRoutingModule,
    StarRatingModule
  ],
  declarations: [BookinghistdetailPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BookinghistdetailPageModule {}
