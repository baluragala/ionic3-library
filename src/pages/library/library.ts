import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BookGroup} from "../../interfaces/book-group.interface";
import {BooksPage} from "../books/books";
import {BooksService} from "../../services/books";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public booksService: BooksService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  bookCollection: BookGroup[];
  booksPage = BooksPage;

  ngOnInit() {
    this.bookCollection = this.booksService.getAllBooks();
  }

}
