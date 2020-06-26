import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { AgmCoreModule } from '@agm/core';
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBZcxdAjjj6MyzxTyeIF8yakEq76NOLe0',
      libraries: ["places"]
    }),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
