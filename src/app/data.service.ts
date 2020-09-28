import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // need this to connect to api 
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService { //!! Insætte API her for use til web
  apiUrl = 'https://localhost:44312/api/users';
  constructor(private http: HttpClient) { }
  getUsers() {
  return this.http.get<User[]>(this.apiUrl);
  }

}
