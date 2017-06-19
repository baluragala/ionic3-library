import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the BookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  author: string;
  title: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.author = this.navParams.data.author
    this.title = this.navParams.data.title
  }

  close(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
