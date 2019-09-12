import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() book: Book;
  message: string;


  constructor(private bookservice: BookService) { }

  ngOnInit() {
  }


  editBook(bookForm) {

    const id = bookForm.value.id;
    const { title, author, description} = bookForm.value;
    const book = {
      title,
      author,
      description
    };

    this.bookservice.edit(id, book).subscribe( () => {
      this.message = 'Successfully updated';
    }, error => {
      this.message = 'Failed when updating book';
    });
  }
}
