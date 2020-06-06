import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbacktabPage } from './feedbacktab.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbacktabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbacktabPageRoutingModule {}
