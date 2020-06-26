import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingorderdetailPageRoutingModule } from './pendingorderdetail-routing.module';

import { PendingorderdetailPage } from './pendingorderdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingorderdetailPageRoutingModule
  ],
  declarations: [PendingorderdetailPage]
})
export class PendingorderdetailPageModule {}
