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
    // await this.http
    //   .get<any>(`https://discordapp.com/oauth2/authorize?client_id=565629052472524822
      // &redirect_uri=http%3A%2F%2Flocalhost%3A3333%2Fcallback&
      // response_type=code&scope=identify%20guilds`)
    //   .subscribe(user => {
    //     this.isLoggedIn = true;
    //     this.userName = user.username;
    //   });

    const url = 'https://discordapp.com/oauth2/authorize?client_id=565629052472524822' +
    '&redirect_uri=http%3A%2F%2Flocalhost%3A3333%2Fcallback&' +
    'response_type=code&scope=identify%20guilds';
    window.open(url);
  }
}
