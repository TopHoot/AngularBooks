import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookSearchComponent } from './books/book-search.component';
import { BookListComponent } from './books/book-list.component';
import { CommaSeparatedPipe } from './comma-separated.pipe'
import { DebounceDirective } from "./debounce.directive";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookSearchComponent,
    BookListComponent,
    CommaSeparatedPipe,
    DebounceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
