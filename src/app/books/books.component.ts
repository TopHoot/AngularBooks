import { Component } from '@angular/core';
import {Book} from "./book.interface";
import {BooksService} from "./books.service";
import {BooksEventService} from "./books.events";

export const testBooks: Book[] = [
  {
    kind: "testKind",
    id: "testID",
    etag: "testETag",
    selfLink: "testSelfLink",
    volumeInfo: {
      title: "The Great Gatsby",
      authors: [
        "Author A",
        "Author B"
      ]
    }
  },
  {
    kind: "testKind",
    id: "testID",
    etag: "testETag",
    selfLink: "testSelfLink",
    volumeInfo: {
      title: "The Catcher in the Rye",
      authors: [
        "Author A",
        "Author B"
      ]
    }
  }
];

@Component({
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['../app.component.css'],
  providers : [BooksService, BooksEventService]
})
export class BooksComponent {
  books: Book[] = [] as Book[];
  errorMessage: string;

  constructor(private booksService: BooksService, private bookEvents: BooksEventService) {
    bookEvents.searchBooksEvent$.subscribe(searchTerm => this.searchBooks(searchTerm));
  }

  setBooks(books: Book[]) {
    this.books.length = 0;
    this.books.concat(books);
  }

  searchBooks(searchTerm: string) {
    this.booksService.searchBooks(searchTerm)
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = error
      );
  }
}
