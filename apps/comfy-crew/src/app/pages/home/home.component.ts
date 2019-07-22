import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Todo {
  message: string;
}

@Component({
  selector: 'comfy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: any;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  // This whole function is to make sure it connects to the nodeJS api
  async fetch() {
    await this.http.get<any>('/comfy-api/api')
    .pipe(map(t => {
      return t;
    }))
    .subscribe(t => {
      console.log('this is from subscribe');
      console.log(t);
      this.todos = t;
    });

  }

  ngOnInit() {
  }

}
