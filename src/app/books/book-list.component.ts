import { Component, Input } from '@angular/core';
import {Book} from "./book.interface";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../app.component.css'],
})
export class BookListComponent {
  @Input() books: Book[];
}
