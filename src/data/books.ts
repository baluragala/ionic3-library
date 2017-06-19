import {BookGroup} from "../models/book-group.interface";

export const BOOK_COLLECTION: BookGroup[] = [
  {
    category: 'Science Fiction',
    books: [
      {
        id: 1,
        author: 'George Orwell',
        title: 'Nineteen Eighty-Four',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 2,
        author: 'Frank Herbert',
        title: 'Dune',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 3,
        author: 'Ray Bradbury',
        title: 'Fahrenheit 451',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 4,
        author: 'William Gibson',
        title: 'Neuromancer',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
    ],
    icon: 'infinite'
  },
  {
    category: 'Romance Novles ',
    books: [
      {
        id: 5,
        author: 'Jane Austen',
        title: 'Pride and Prejudice',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 6,
        author: 'Diana Gabaldon',
        title: 'Outlander',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 7,
        author: 'Erich Segal',
        title: 'Love Story',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 8,
        author: 'Charlotte Brontë',
        title: 'Jane Eyre',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
    ],
    icon: 'flame'
  },
  {
    category: 'Inspirational',
    books: [
      {
        id: 9,
        author: 'Napoleon Hill',
        title: 'Think and Grow Rich',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 10,
        author: 'Norman Vincent Peale',
        title: 'The Power of Positive Thinking',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 11,
        author: 'Mitch Albom',
        title: 'Tuesdays with Morrie',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
      {
        id: 12,
        author: 'Sun Tzu',
        title: 'The complete art of war',
        coverPage: 'http://sellmybook.co.uk/wp-content/uploads/2016/06/book-stack-xxl.png'
      },
    ],
    icon: 'bonfire'
  },

];
