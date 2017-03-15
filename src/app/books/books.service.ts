import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Book } from "./book.interface";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  private googleBooksAPI = 'https://www.googleapis.com/books/v1/';

  constructor (private http: Http) {
  }

  searchBooks(searchTerm: string): Observable<Book[]> {
    return this.http.get(this.googleBooksAPI + "volumes?q=" + searchTerm)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response) {
    let body = response.json();
    return body.items;
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
