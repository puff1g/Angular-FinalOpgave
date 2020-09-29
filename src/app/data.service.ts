import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { //!! Insætte API her for use til web
  apiUrl = 'https://localhost:44312';
  TEST_URL = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) { }
  // users: Observable<User[]>;
  posts: Observable<any>;

  getUsers() {
    // let params = new HttpParams().set('UserId', '1');
    // this.users = this.http.get<User[]>(this.apiUrl + '/api/users')
    return this.http.get<User[]>(this.apiUrl + '/api/users');
  }

  getPosts() {
    let params = new HttpParams().set('userId', "1");
    this.posts = this.http.get(this.TEST_URL + '/posts', {params})
  }
}
