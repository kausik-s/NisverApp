import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [

      {
        path: 'adminhome',
        loadChildren: () => import('../adminhome/adminhome.module').then( m => m.AdminhomePageModule)
      },
      {
        path: 'custtab',
        loadChildren: () => import('../custtab/custtab.module').then( m => m.CusttabPageModule)
      },
      {
        path: 'feedbacktab',
        loadChildren: () => import('../feedbacktab/feedbacktab.module').then( m => m.FeedbacktabPageModule)
      },
      {
        path: '',
        redirectTo: 'adminhome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'adminhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
