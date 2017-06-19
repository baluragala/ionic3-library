import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BookGroup} from "../../models/book-group.interface";
import {BookGroupPage} from "../book-group/book-group";
import {LibraryService} from "../../services/library.service";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  bookCollection: BookGroup[];
  bookGroupPage = BookGroupPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public libraryService: LibraryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }



  ngOnInit() {
    this.bookCollection = this.libraryService.getAllBooks();
  }

}
