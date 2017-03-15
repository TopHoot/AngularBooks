import { Component } from '@angular/core';
import { Book } from "./book.interface";

const BOOKS: Book[] = [
  {
    id: "12345",
    volumeInfo: {
      title: "The Great Gatsby",
      authors: ["F. Scott Fitzgerald"],
      description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.",
    }
  },
  {
    id: "67890",
    volumeInfo: {
      title: "Fahrenheit 451",
      authors: ["Ray Bradbury"],
      description: "Fahrenheit 451 is a dystopian novel by Ray Bradbury, published in 1953. It is regarded as one of his best works. The novel presents a future American society where books are outlawed and firemen burn any that are found.",
    }
  },
  {
    id: "54321",
    volumeInfo: {
      title: "Harry Potter and the Cursed Child",
      authors: ["J.K. Rowling", "John Tiffany", "Jack Thorne"],
      description: "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016.",
    }
  }
];

@Component({
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['../app.component.css']
})
export class BooksComponent {
  books: Book[] = BOOKS;

  constructor() {
  }
}
