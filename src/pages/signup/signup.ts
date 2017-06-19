import {AuthService} from "./../../services/auth.service";
import {Component} from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";

import {NgForm} from "@angular/forms"
import firebase from "firebase";
import {UUID} from "angular2-uuid";


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  doSignUp(signUpForm: NgForm) {
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authService.register(signUpForm.value)
      .then(user => {
        console.log(user);
        firebase.database().ref('users/' + UUID.UUID())
          .set(signUpForm.value);
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      })
  }
}
