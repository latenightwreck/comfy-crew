import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import {
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    XivapiClientModule.forRoot('cd1e255e760b445799d4a581'),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
