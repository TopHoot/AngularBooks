import { Component } from '@angular/core';
import {Book} from "./book.interface";
import {BooksService} from "./books.service";
import {BooksEventService} from "./books.events";

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

  searchBooks(searchTerm: string) {
    this.booksService.searchBooks(searchTerm)
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = error
      );
  }
}
