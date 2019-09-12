import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book;
  message: string;
  BookForm: FormGroup;
  constructor(private bookService: BookService, private routes: ActivatedRoute,
              private  router: Router, private fb: FormBuilder) { }


  ngOnInit() {
    this.routes.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
    console.log(this.book);
    }
  editBook(bookForm) {
    this.bookService.edit(this.book.id, bookForm.value).subscribe(next => {
      console.log(bookForm.value);
      this.message = 'update successful';
    }, error => {
      this.message = 'update fail!';
    });
  }
}
