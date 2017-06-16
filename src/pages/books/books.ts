import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Book} from "../../interfaces/book.interface";
import {BooksService} from "../../services/books";
import {BookGroup} from "../../interfaces/book-group.interface";

/**
 * Generated class for the BooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  bookGroup: BookGroup;

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.bookGroup = this.navParams.data;
  }

  onAddToFavorites(selectedBook: Book) {
    const alert = this.alertCtrl.create({
      title: 'Add Book',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the book?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.booksService.addBookToFavorites(selectedBook);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(book: Book) {
    this.booksService.removeBookFromFavorites(book);
  }

  isFavorite(book: Book) {
    return this.booksService.isBookFavorite(book);
  }

}
