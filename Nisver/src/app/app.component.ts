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
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
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
        url   : "/login",
        icon  : "home"
      },
      {
        title : "Change Password",
        url   : "/changepwd",
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
        url   : "/trmsandcond",
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
        title : "Legal",
        url   : "/legal",
        icon  : "home"
      }

    ]
  }
}
