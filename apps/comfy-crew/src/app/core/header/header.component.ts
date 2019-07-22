import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'comfy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  userName: string;

  constructor(private http: HttpClient) {}

  async onLogIn() {
    await this.http
      .get<any>('/comfy-api/login')
      .subscribe(user => {
        this.isLoggedIn = true;
        this.userName = user.username;
      });
  }
}
