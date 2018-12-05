import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { HeaderComponent } from './header/header.component';

import {FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { ClassJobComponent } from './character/class-job/class-job.component';
import { ClassJobListComponent } from './character/class-job-list/class-job-list.component';
import { CharacterSearchComponent } from './search/character-search/character-search/character-search.component';
import { SearchBarComponent } from './search/character-search/character-search/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CharacterComponent,
    ClassJobComponent,
    ClassJobListComponent,
    CharacterSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    XivapiClientModule.forRoot('cd1e255e760b445799d4a581'),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
