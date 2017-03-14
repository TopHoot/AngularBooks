import { Component } from '@angular/core';
import { BooksService } from "./books.service";
import {BooksEventService} from "./books.events";

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['../app.component.css'],
})
export class BookSearchComponent {
  searchTerm: string;

  constructor(private bookEvents: BooksEventService) {
  }

  update(searchTerm: string) {
    this.bookEvents.searchBooks(searchTerm);
  }
}
