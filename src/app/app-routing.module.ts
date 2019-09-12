import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookInfoComponent} from './book-info/book-info.component';
import {BookAddComponent} from './book-add/book-add.component';
import {EditBookComponent} from './edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '', component: BookInfoComponent
  },
  {
    path: 'add', component: BookAddComponent
  },
  {
    path: 'edit/:id', component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
