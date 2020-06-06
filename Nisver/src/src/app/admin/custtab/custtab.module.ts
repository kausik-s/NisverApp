import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusttabPageRoutingModule } from './custtab-routing.module';

import { CusttabPage } from './custtab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusttabPageRoutingModule
  ],
  declarations: [CusttabPage]
})
export class CusttabPageModule {}
