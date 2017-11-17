import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { User } from '../models/user';
import { async } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { State } from '../../reducers/index';

/*
  ACTION CONSTANTS
*/

export const LOAD_USERS = '[Users] Load';
export const LOAD_USERS_SUCCESS = '[Users] Load Complete';

/*
  ACTION CLASSES
*/

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User) {}
}

/*
  ACTION CREATORS
*/

@Injectable()
export class IndexActions {

  constructor(private store: Store<State>, private http: HttpClient, private router: Router ) {}

  async fetchAllUsers() {
    this.store.dispatch(new LoadUsers());
    try {
      const users$: any = await this.http
        .get('http://localhost:9080/user.db.JSON').toPromise();
     /*  
     const users$: any = [
        {
        "_id": "1",
        "username": "string",
        "name": "Francisco Domínguez",
        "stars": "15"
        }, {
            "_id": "2",
            "username": "string",
            "name": "Pedro Márquez",
            "stars": "30"
        }, {
            "_id": "3",
            "username": "string",
            "name": "Robeto Mórales",
            "stars": "18"
        }, {
            "_id": "4",
            "username": "string",
            "name": "Rosío Hernández",
            "stars": "27"
        }, {
          "_id": "5",
            "username": "string",
            "name": "Cristian Solis",
            "stars": "20"
        }, {
            "_id": "6",
            "username": "string",
            "name": "Roberto Pérez",
            "stars": "number"
        }, {
            "_id": "7",
            "username": "string",
            "name": "María Céspedez",
            "stars": "14"
        }, {
            "_id": "8",
            "username": "string",
            "name": "Olga Martínez",
            "stars": "38"
        }, {
            "_id": "9",
            "username": "string",
            "name": "Alejandro Castillo",
            "stars": "8"
        }, {
            "_id": "10",
            "username": "string",
            "name": "Fernanda Guatemala",
            "stars": "15"
        }
      ]; 
      */

      this.store.dispatch(new LoadUsersSuccess(users$));
 
    } catch (error) {
      
    }
  }

}
