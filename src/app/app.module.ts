import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { HeaderComponent } from './core/header/header.component';

import {FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { ClassJobComponent } from './character/class-job/class-job.component';
import { ClassJobListComponent } from './character/class-job-list/class-job-list.component';
import { CharacterSearchComponent } from './pages/search/character-search/character-search.component';
import { CharacterListItemComponent } from './pages/search/character-search/components/character-list-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterComponent,
    ClassJobComponent,
    ClassJobListComponent,
    CharacterSearchComponent,
    CharacterListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    XivapiClientModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
