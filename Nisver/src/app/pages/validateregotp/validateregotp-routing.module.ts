import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateregotpPage } from './validateregotp.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateregotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateregotpPageRoutingModule {}
