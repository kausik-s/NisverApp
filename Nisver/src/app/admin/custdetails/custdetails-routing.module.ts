import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustdetailsPage } from './custdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CustdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustdetailsPageRoutingModule {}
