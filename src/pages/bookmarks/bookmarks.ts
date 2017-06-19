import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { LibraryService } from "../../services/library.service";
import { Book } from "../../models/book.interface";
import { BookPage } from "../book/book";

/**
 * Generated class for the BookmarksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-bookmarks",
  templateUrl: "bookmarks.html"
})
export class BookmarksPage implements OnInit {
  bookmarkedCollection: Book[];
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public libraryService: LibraryService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BookmarksPage");
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.bookmarkedCollection = this.libraryService.getBookmarkedBooks();
  }

  onViewBook(book: Book) {
    const modal = this.modalCtrl.create(BookPage, book);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromBookmarks(book);
      }
    });
  }

  onRemoveFromBookmarks(book: Book) {
    this.libraryService.removeBookFromBookmarks(book);
    // this.quotes = this.quotesService.getFavoriteQuotes();
    const position = this.bookmarkedCollection.findIndex((bookEl: Book) => {
      return bookEl.id == book.id;
    });
    this.bookmarkedCollection.splice(position, 1);
  }
}
