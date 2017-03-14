import { Component } from '@angular/core';
import {Book} from "./book.interface";

export const testBooks: Book[] = [
  {
    kind: "testKind",
    id: "testID",
    etag: "testETag",
    selfLink: "testSelfLink",
    volumeInfo: {
      title: "Test Title",
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
      title: "Test Title",
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
  styleUrls: ['../app.component.css']
})
export class BooksComponent {
  books = testBooks;
}
