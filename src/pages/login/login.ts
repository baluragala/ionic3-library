import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from "ionic-angular";
import {AuthService} from "../../services/auth.service";
import {NgForm} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  doLogin(loginForm: NgForm) {
    console.log(loginForm);
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authService.login(loginForm.value.email, loginForm.value.password)
      .then(result => {
        console.log(result);
        loading.dismiss();
        this.authService.IsLoggedIn = true;
        this.navCtrl.setRoot(TabsPage)
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      })
  }

}
