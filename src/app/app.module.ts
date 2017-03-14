import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookSearchComponent } from "./books/book-search.component";
import { BookListComponent } from "./books/book-list.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookSearchComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
