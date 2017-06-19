import {AuthService} from './../services/auth.service';
import {SignupPageModule} from "./../pages/signup/signup.module";
import {LoginPageModule} from "./../pages/login/login.module";
import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {BookPage} from "../pages/book/book";
import {BookGroupPage} from "../pages/book-group/book-group";
import {LibraryService} from "../services/library.service";
import {LibraryPage} from "../pages/library/library";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {BookmarksPageModule} from "../pages/bookmarks/bookmarks.module";

import firebase from "firebase";

import {ProfilePageModule} from "../pages/profile/profile.module";

firebase.initializeApp({
  apiKey: "AIzaSyAbUih0thtsJXBMUV_MWu3fhOE-qBAZtXQ",
  authDomain: "online-library-zeolearn.firebaseapp.com",
  databaseURL: "https://online-library-zeolearn.firebaseio.com"
});


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage,
    BookGroupPage,
    LibraryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsPageModule,
    BookmarksPageModule,
    LoginPageModule,
    SignupPageModule,
    ProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookPage,
    BookGroupPage,
    LibraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibraryService,
    AuthService
  ]
})
export class AppModule {
}
