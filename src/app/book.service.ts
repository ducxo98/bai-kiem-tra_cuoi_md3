import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  getListRealtime(): Observable<Book[]> {
    const url = `${this.apiUrl}/books`;
    return this.httpClient.get<Book[]>(url);
  }

  getDetail(id: number): Observable<Book> {
    const url = `${this.apiUrl}/books/${id}`;
    return this.httpClient.get<Book>(url);
  }

  add(book: Book) {
    const url = this.apiUrl + '/books';
    return this.httpClient.post(url, book);
  }

  delete(id: number) {
    const url = this.apiUrl + '/books/' + id;
    return this.httpClient.delete(url);
  }

  edit(id: number, book: Book): Observable<any> {
    const url = this.apiUrl + '/books/' + id;
    return this.httpClient.put(url, book);
  }
}
