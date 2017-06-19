import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BookmarksPage} from "../bookmarks/bookmarks";
import {LibraryPage} from "../library/library";
import {AuthService} from "../../services/auth.service";
import {LoginPage} from "../login/login";
import {ProfilePage} from "../profile/profile";


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  bookmarksPage: any = BookmarksPage;
  libraryPage: any = LibraryPage;
  profilePage: any = ProfilePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewCanEnter() {
    if (this.authService.IsLoggedIn) {
      return true;
    } else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
