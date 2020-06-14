import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VendorsearchPageRoutingModule } from './vendorsearch-routing.module';
import { VendorsearchPage } from './vendorsearch.page';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBZcxdAjjj6MyzxTyeIF8yakEq76NOLe0',
      libraries: ["places"]
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VendorsearchPageRoutingModule
  ],
  declarations: [VendorsearchPage]
})
export class VendorsearchPageModule {}
