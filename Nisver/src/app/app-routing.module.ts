import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home/booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'custtab',
    loadChildren: () => import('./admin/custtab/custtab.module').then( m => m.CusttabPageModule)
  },
  {
    path: 'feedbacktab',
    loadChildren: () => import('./admin/feedbacktab/feedbacktab.module').then( m => m.FeedbacktabPageModule)
  },
  {
    path: 'custdetails',
    loadChildren: () => import('./admin/custdetails/custdetails.module').then( m => m.CustdetailsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'forgotpassvlidateotp',
    loadChildren: () => import('./pages/forgotpassvlidateotp/forgotpassvlidateotp.module').then( m => m.ForgotpassvlidateotpPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./admin/addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  }
  ,
  {
    path: 'termsandcondition',
    loadChildren: () => import('./pages/termsandcondition/termsandcondition.module').then( m => m.TermsandconditionPageModule)
  },
  
  {
    path: 'validateregotp',
    loadChildren: () => import('./pages/validateregotp/validateregotp.module').then( m => m.ValidateregotpPageModule)
  },
  {
    path: 'home/orderhistdetails',
    loadChildren: () => import('./pages/orderhistdetails/orderhistdetails.module').then( m => m.OrderhistdetailsPageModule)
  },
  {
    path: 'home/bookinghistdetail',
    loadChildren: () => import('./pages/bookinghistdetail/bookinghistdetail.module').then( m => m.BookinghistdetailPageModule)
  },
  {
    path: 'home/pendingorderdetail',
    loadChildren: () => import('./pages/pendingorderdetail/pendingorderdetail.module').then( m => m.PendingorderdetailPageModule)
  }

  
  /*
  ,

  {
    path: 'pendingorder',
    loadChildren: () => import('./pages/pendingorder/pendingorder.module').then( m => m.PendingorderPageModule)
  },
  {
    path: 'orderhistory',
    loadChildren: () => import('./pages/orderhistory/orderhistory.module').then( m => m.OrderhistoryPageModule)
  },
  {
    path: 'bookinghistory',
    loadChildren: () => import('./pages/bookinghistory/bookinghistory.module').then( m => m.BookinghistoryPageModule)
  }
  */
  /*
  ,
  {
    path: 'home/vendorsearch',
    loadChildren: () => import('./pages/vendorsearch/vendorsearch.module').then( m => m.VendorsearchPageModule)
  }
  */
  /*,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  }
  */

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
