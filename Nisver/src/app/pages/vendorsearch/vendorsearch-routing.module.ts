import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorsearchPage } from './vendorsearch.page';

const routes: Routes = [
  {
    path: '',
    component: VendorsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsearchPageRoutingModule {}
