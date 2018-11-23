import { Injectable } from '@angular/core';
import { XivapiService, CharacterSearchResult, CharacterResponse } from '@xivapi/angular-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private xivapi: XivapiService) {}

  searchCharacters(value: string): Observable<CharacterSearchResult> {
    return this.xivapi.searchCharacter(value, 'sargatanas');
  }

  getCharacter(id: number): Observable<CharacterResponse> {
    const options = { columns: [
      'Character.ClassJobs',
      'Character.ID',
      'Character.FreeCompanyId',
      'Character.Portrait'
    ],
  extended: 1};
    return this.xivapi.getCharacter(id, options);
  }
}
