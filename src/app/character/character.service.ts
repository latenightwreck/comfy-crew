import { map } from 'rxjs/operators';
import { Character } from './character.model';
import { Injectable } from '@angular/core';
import { XivapiService, CharacterSearchResult } from '@xivapi/angular-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private xivapi: XivapiService) {}

  searchCharacters(value: string): Observable<CharacterSearchResult> {
    return this.xivapi.searchCharacter(value, 'sargatanas');
  }

  getCharacter(id: number): Observable<Character> {
    const options = { columns: [
      'Character.ClassJobs',
      'Character.Portrait'
    ]};
    return this.xivapi.getCharacter(id, options).pipe(
      map(charResponse => {
        return new Character(charResponse);
      })
    );
  }
}