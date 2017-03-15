import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material'
import { Book } from "./book.interface";
import { BooksService } from "./books.service";
import { BooksEventService } from "./books.events";

@Component({
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['../app.component.css'],
  providers : [BooksService, BooksEventService]
})
export class BooksComponent {
  books: Book[] = [] as Book[];

  constructor(private booksService: BooksService, private bookEvents: BooksEventService, private snackBar: MdSnackBar) {
    bookEvents.searchBooksEvent$.subscribe(searchTerm => this.searchBooks(searchTerm));
  }

  searchBooks(searchTerm: string) {
    this.booksService.searchBooks(searchTerm)
      .subscribe(
        books => this.books = books
      );
  }
}
