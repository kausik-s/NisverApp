import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsearchPageRoutingModule } from './vendorsearch-routing.module';

import { VendorsearchPage } from './vendorsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorsearchPageRoutingModule
  ],
  declarations: [VendorsearchPage]
})
export class VendorsearchPageModule {}
