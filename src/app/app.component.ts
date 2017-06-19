import {AuthService} from "./../services/auth.service";
import {SignupPage} from "./../pages/signup/signup";
import {LoginPage} from "./../pages/login/login";
import {Component, ViewChild} from "@angular/core";
import {Platform, NavController, MenuController, AlertController} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {TabsPage} from "../pages/tabs/tabs";
import firebase from "firebase"

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = TabsPage;
  loginPage: any = LoginPage;
  signupPage: any = SignupPage;
  isLoggedIn: boolean = false;

  @ViewChild("nav") nav: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private alertCtrl: AlertController,
              private authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewDidLoad(){
    this.isLoggedIn = this.authService.IsLoggedIn;
  }

  openPage(page: any) {
    console.log("Opening Page :", page);
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  doLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }
}
