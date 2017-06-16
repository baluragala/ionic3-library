import {Book} from "../interfaces/book.interface";
import {BookGroup} from "../interfaces/book-group.interface";
import {BOOK_COLLECTION} from "../data/books";


export class BooksService {
  private favoriteBooks: Book[] = [];

  addBookToFavorites(Book: Book) {
    this.favoriteBooks.push(Book);
    console.log(this.favoriteBooks);
  }

  removeBookFromFavorites(Book: Book) {
    const position = this.favoriteBooks.findIndex((BookEl: Book) => {
      return BookEl.id == Book.id;
    });
    this.favoriteBooks.splice(position, 1);
  }

  getFavoriteBooks() {
    return this.favoriteBooks.slice();
  }

  isBookFavorite(Book: Book) {
    return this.favoriteBooks.find((BookEl: Book) => {
      return BookEl.id == Book.id;
    });
  }

  getAllBooks(): BookGroup[] {
    return BOOK_COLLECTION;
  }
}
