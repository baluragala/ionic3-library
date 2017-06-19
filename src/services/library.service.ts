import {Book} from "../models/book.interface";
import {BookGroup} from "../models/book-group.interface";
import {BOOK_COLLECTION} from "../data/books";


export class LibraryService {
  private bookmarkedBooks: Book[] = [];

  addBookToBookmarks(Book: Book) {
    this.bookmarkedBooks.push(Book);
    console.log(this.bookmarkedBooks);
  }

  removeBookFromBookmarks(Book: Book) {
    const position = this.bookmarkedBooks.findIndex((bookEntry: Book) => {
      return bookEntry.id == Book.id;
    });
    this.bookmarkedBooks.splice(position, 1);
  }

  getBookmarkedBooks() {
    return this.bookmarkedBooks.slice();
  }

  isBookBookmarked(Book: Book) {
    return this.bookmarkedBooks.find((bookEntry: Book) => {
      return bookEntry.id == Book.id;
    });
  }

  getAllBooks(): BookGroup[] {
    return BOOK_COLLECTION;
  }
}
