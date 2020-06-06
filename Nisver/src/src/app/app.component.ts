import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from '../app/services/api.service';
import { CommonService } from '../app/services/common.service';//common serviec
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  user_type :any
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,private apiService:ApiService,private commonService:CommonService
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
    this.commonService.getObject("userData").then((result) => {
    console.log(result); 
    this.user_type=result['user_type'];
    } );
    this.navigate =
    [
      //if(user_type==="ADMIN")
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      //else{
      //title : "Home",
     // url   : "/home",
      //icon  : "home"
    //},
      {
        title : "Profile",
        url   : "/profile",
        icon  : "people-outline"
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
        title : "Log Out",
        url   : "/",
        icon  : "log-out-outline"
      }

    ]
  }
}
