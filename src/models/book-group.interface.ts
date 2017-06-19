import {Book} from "./book.interface";

export interface BookGroup {
  category: string,
  books: Book[],
  icon: string
}
