import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpassvlidateotpPage } from './forgotpassvlidateotp.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassvlidateotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpassvlidateotpPageRoutingModule {}
