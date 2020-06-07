import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  navigateAdmin:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
    this.adminMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  /***** sideMenu for user menu and adminMenu for Admin
   * 
   * for usiing menu import import
   * { MenuController } from '@ionic/angular';
   * in *.page.ts file
   * pass menu cotroller in Construter like : private menu: MenuController 
   * inside controller write 
   * 
   *  this.menu.enable(true, 'admin');  for admin menu
   *  this.menu.enable(true, 'first');  for user menu
   * 
   * 
   */
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/profile",
        icon  : "home"
      },
      {
        title : "Change Password",
        url   : "/changepassword",
        icon  : "help-circle-outline"
      },
      {
        title : "Feedback",
        url   : "/feedback",
        icon  : "trophy-outline"
      },
      {
        title : "Privacy Policy",
        url   : "/privacy",
        icon  : "eye-off-outline"
      },
      {
        title : "Terms and Condition",
        url   : "/termsandcondition",
        icon  : "create-outline"
      }
      ,
      {
        title : "About Us",
        url   : "/aboutus",
        icon  : "people-outline"
      },
      {
        title : "Log Out",
        url   : "/",
        icon  : "log-out-outline"
      }

    ]
  }

  adminMenu()
  {
    this.navigateAdmin =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/profile",
        icon  : "person-outline"
      },
      {
        title : "Change Password",
        url   : "/changepassword",
        icon  : "help-circle-outline"
      },
      {
        title : "Feedback",
        url   : "/feedback",
        icon  : "trophy-outline"
      },{
        title : "Add Category",
        url   : "/addcategory",
        icon  : "people-outline"
      },
      {
        title : "Privacy Policy",
        url   : "/privacy",
        icon  : "eye-off-outline"
      },
      {
        title : "Terms and Condition",
        url   : "/termsandcondition",
        icon  : "create-outline"
      }
      ,
      {
        title : "About Us",
        url   : "/aboutus",
        icon  : "people-outline"
      }
      ,
      {
        title : "Log Out",
        url   : "/",
        icon  : "log-out-outline"
      }

    ]
  }
}
