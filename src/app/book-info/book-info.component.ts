import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  selectedBook: Book;

  selectHandler($event) {
    this.selectedBook = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
