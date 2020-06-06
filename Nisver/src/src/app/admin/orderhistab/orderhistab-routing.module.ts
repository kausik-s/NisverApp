import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderhistabPage } from './orderhistab.page';

const routes: Routes = [
  {
    path: '',
    component: OrderhistabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderhistabPageRoutingModule {}
