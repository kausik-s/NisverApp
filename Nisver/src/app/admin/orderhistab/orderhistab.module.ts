import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderhistabPageRoutingModule } from './orderhistab-routing.module';

import { OrderhistabPage } from './orderhistab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderhistabPageRoutingModule
  ],
  declarations: [OrderhistabPage]
})
export class OrderhistabPageModule {}
