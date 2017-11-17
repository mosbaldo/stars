import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from './../../../reducers';
import { User } from '../../models/user';
import { IndexActions } from './../../actions';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<Array<User>>;
  // users$: Observable<Array<User>>;
  constructor(
    private store: Store<State>,
    public actions: IndexActions
  ) { }

  ngOnInit() {
    // for (let i = 1; i <= 10; i++) {
    //   this.users$.push(new User(i, `Usuario ${i}`, `${Math.floor(Math.random() * 100 + 1)}`));
    // }
    this.users$ = this.store.select(fromUsers.getAllUsers);   
    this.actions.fetchAllUsers();
  }

}