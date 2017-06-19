import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Book} from "../../models/book.interface";
import {LibraryService} from "../../services/library.service";
import {BookGroup} from "../../models/book-group.interface";

@Component({
  selector: 'page-book-group',
  templateUrl: 'book-group.html',
})
export class BookGroupPage {

  bookGroup: BookGroup;

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private libraryService: LibraryService) {
  }

  ngOnInit() {
    this.bookGroup = this.navParams.data;
  }

  onAddToFavorites(selectedBook: Book) {
    const alert = this.alertCtrl.create({
      title: 'Bookmark',
      subTitle: selectedBook.title,
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.libraryService.addBookToBookmarks(selectedBook);
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
    this.libraryService.removeBookFromBookmarks(book);
  }

  isFavorite(book: Book) {
    return this.libraryService.isBookBookmarked(book);
  }

}
