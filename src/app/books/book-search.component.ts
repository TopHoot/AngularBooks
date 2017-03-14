import { Component } from '@angular/core';

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['../app.component.css'],
})
export class BookSearchComponent {
  searchTerm: string;

  update(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
