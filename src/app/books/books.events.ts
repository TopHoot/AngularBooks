import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class BooksEventService {
  public searchBooksEvent$: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  searchBooks(searchTerm: string) {
    this.searchBooksEvent$.emit(searchTerm);
  }
}
