import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [

      {
        path: 'pendingorder',
        loadChildren: () => import('../pages/pendingorder/pendingorder.module').then( m => m.PendingorderPageModule)
      },
      {
        path: 'vendorsearch',
        loadChildren: () => import('../pages/vendorsearch/vendorsearch.module').then( m => m.VendorsearchPageModule)
      },
      {
        path: 'orderhistory',
        loadChildren: () => import('../pages/orderhistory/orderhistory.module').then( m => m.OrderhistoryPageModule)
      },
      {
        path: 'bookinghistory',
        loadChildren: () => import('../pages/bookinghistory/bookinghistory.module').then( m => m.BookinghistoryPageModule)
      },
      {
        path: '',
        redirectTo: 'pendingorder',
        pathMatch: 'full'
      }
    ]
    
    
  },
  {
    path: '',
    redirectTo: 'pendingorder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
