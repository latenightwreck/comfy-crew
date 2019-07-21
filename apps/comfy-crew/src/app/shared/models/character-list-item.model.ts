import { CharacterSearchResultRow } from '@xivapi/angular-client';

export class CharacterListItem {

  public id: number;
  public avatar: string;
  public name: string;
  public server: string;

  constructor(charRow: CharacterSearchResultRow) {
    this.id = charRow.ID;
    this.avatar = charRow.Avatar;
    this.name = charRow.Name;
    this.server = charRow.Server;
  }
}
