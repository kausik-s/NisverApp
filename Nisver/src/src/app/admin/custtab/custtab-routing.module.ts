import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusttabPage } from './custtab.page';

const routes: Routes = [
  {
    path: '',
    component: CusttabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusttabPageRoutingModule {}
