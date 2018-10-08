import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    XivapiClientModule.forRoot('cd1e255e760b445799d4a581')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
