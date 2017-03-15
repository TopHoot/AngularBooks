import { Component, OnInit } from '@angular/core';
import { BooksEventService } from "./books.events";

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['../app.component.css'],
})
export class BookSearchComponent {
  private searchTerms: string;

  constructor(private bookEvents: BooksEventService) {
  }

  search(searchTerm: string) {
    this.bookEvents.searchBooks(searchTerm);
  }
}
