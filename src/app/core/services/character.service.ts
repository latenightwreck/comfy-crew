import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { XivapiService, CharacterSearchResult } from '@xivapi/angular-client';
import { Observable } from 'rxjs';
import { Character } from 'src/app/character/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private xivapi: XivapiService) {}

  searchCharacters(charName: string, serverName: string): Observable<CharacterSearchResult> {
    return this.xivapi.searchCharacter(charName, serverName);
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
