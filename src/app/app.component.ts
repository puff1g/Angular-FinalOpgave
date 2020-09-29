import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './User';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  users$: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }

}
