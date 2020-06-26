import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingorderdetailPage } from './pendingorderdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PendingorderdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingorderdetailPageRoutingModule {}
