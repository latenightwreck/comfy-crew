import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { XivapiService } from '@xivapi/angular-client';
import { Observable } from 'rxjs';
import { Character } from 'apps/comfy-crew/src/app/shared/models/character.model';
import { CharacterListItem } from 'apps/comfy-crew/src/app/shared/models/character-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private xivapi: XivapiService) {}

  searchCharacters(
    charName: string,
    serverName: string
  ): Observable<CharacterListItem[]> {
    return this.xivapi.searchCharacter(charName, serverName).pipe(
      map(searchResult => {
        const list: CharacterListItem[] = [];
        for (const result of searchResult.Results) {
          list.push(new CharacterListItem(result));
        }
        return list;
      })
    );
  }

  getCharacter(id: number): Observable<Character> {
    const options = {
      columns: ['Character.ClassJobs', 'Character.Portrait']
    };
    return this.xivapi.getCharacter(id, options).pipe(
      map(charResponse => {
        return new Character(charResponse);
      })
    );
  }
}
