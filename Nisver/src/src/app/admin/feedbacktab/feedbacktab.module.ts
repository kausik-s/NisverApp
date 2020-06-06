import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbacktabPageRoutingModule } from './feedbacktab-routing.module';

import { FeedbacktabPage } from './feedbacktab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbacktabPageRoutingModule
  ],
  declarations: [FeedbacktabPage]
})
export class FeedbacktabPageModule {}
