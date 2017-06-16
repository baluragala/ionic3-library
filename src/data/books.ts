import {BookGroup} from "../interfaces/book-group.interface";

export const BOOK_COLLECTION: BookGroup[] = [
  {
    category: 'Science Fiction',
    books: [
      {
        id: 1,
        author: 'George Orwell',
        title: 'Nineteen Eighty-Four',
        coverPage: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRcuQJXseeMP8OiHrrTblnyrpkHWVwF1xyCo1hPTDFwgeS9WiLo'
      },
      {
        id: 2,
        author: 'Frank Herbert',
        title: 'Dune',
        coverPage: 'https://images-na.ssl-images-amazon.com/images/I/41roF32BWCL._CR0,96,308,308_UX128.jpg'
      },
      {
        id: 3,
        author: 'Ray Bradbury',
        title: 'Fahrenheit 451'
      },
      {
        id: 4,
        author: 'William Gibson',
        title: 'Neuromancer'
      },
    ],
    icon: 'brush'
  },
  {
    category: 'Romance Novles ',
    books: [
      {
        id: 5,
        author: 'Jane Austen',
        title: 'Pride and Prejudice'
      },
      {
        id: 6,
        author: 'Diana Gabaldon',
        title: 'Outlander'
      },
      {
        id: 7,
        author: 'Erich Segal',
        title: 'Love Story'
      },
      {
        id: 8,
        author: 'Charlotte Brontë',
        title: 'Jane Eyre'
      },
    ],
    icon: 'brush'
  },
  {
    category: 'Inspirational',
    books: [
      {
        id: 9,
        author: 'Napoleon Hill',
        title: 'Think and Grow Rich'
      },
      {
        id: 10,
        author: 'Norman Vincent Peale',
        title: 'The Power of Positive Thinking'
      },
      {
        id: 11,
        author: 'Mitch Albom',
        title: 'Tuesdays with Morrie'
      },
      {
        id: 12,
        author: 'Sun Tzu',
        title: 'The complete art of war'
      },
    ],
    icon: 'brush'
  },

];
