import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() bookClick = new EventEmitter<Book>();

  message: string;

  constructor(private bookservice: BookService, private router: Router) { }

  ngOnInit() {
    this.getList();
  }
  editBook(id: number) {
    this.router.navigate(['/edit', id]);
  }


  getList() {
    const updateBooksEvent = this.bookservice.getListRealtime();

    updateBooksEvent.subscribe( newList => {
      this.books = newList;
    }, error => {
      console.log('Lỗi gì đó!', error);
      this.message = error.message;
    });
  }

  selectBook(book: Book) {
    this.bookClick.emit(book);
  }

  deleteBook(id: number) {
    this.bookservice.delete(id).subscribe( () => {
      this.message = 'Successfully deleted';
      this.getList();
    }, error => {
      this.message = 'Failed when deleting book with id = ' + id;
    });
  }

}
