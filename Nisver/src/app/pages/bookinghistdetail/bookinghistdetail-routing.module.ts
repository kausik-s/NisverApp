import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinghistdetailPage } from './bookinghistdetail.page';

const routes: Routes = [
  {
    path: '',
    component: BookinghistdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinghistdetailPageRoutingModule {}
