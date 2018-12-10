import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';
import { tap, switchMap, finalize, debounceTime, filter } from 'rxjs/operators';
import { CharacterSearchResultRow } from '@xivapi/angular-client';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CharacterListItem } from 'src/app/shared/models/character-list-item.model';

@Component({
  selector: 'comfy-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  readonly SERVER_LIST: Object = {
    Aether: [
      'Adamantoise',
      'Balmung',
      'Cactuar',
      'Coeurl',
      'Faerie',
      'Gilgamesh',
      'Goblin',
      'Jenova',
      'Mateus',
      'Midgardsormr',
      'Sargatanas',
      'Siren',
      'Zalera'
    ],
    Chaos: [
      'Cerberus',
      'Lich',
      'Louisoix',
      'Moogle',
      'Odin',
      'Omega',
      'Phoenix',
      'Ragnarok',
      'Shiva',
      'Zodiark'
    ],
    Elemental: [
      'Aegis',
      'Atomos',
      'Carbuncle',
      'Garuda',
      'Gungnir',
      'Kujata',
      'Ramuh',
      'Tonberry',
      'Typhon',
      'Unicorn'
    ],
    Gaia: [
      'Alexander',
      'Bahamut',
      'Durandal',
      'Fenrir',
      'Ifrit',
      'Ridill',
      'Tiamat',
      'Ultima',
      'Valefor',
      'Yojimbo',
      'Zeromus'
    ],
    Mana: [
      'Anima',
      'Asura',
      'Belias',
      'Chocobo',
      'Hades',
      'Ixion',
      'Mandragora',
      'Masamune',
      'Pandaemonium',
      'Shinryu',
      'Titan'
    ],
    Primal: [
      'Behemoth',
      'Brynhildr',
      'Diabolos',
      'Excalibur',
      'Exodus',
      'Famfrit',
      'Hyperion',
      'Lamia',
      'Leviathan',
      'Malboro',
      'Ultros'
    ]
  };

  isLoading = false;
  characterSearchForm: FormGroup;
  public charResultList: CharacterListItem[] = [];

  constructor(fb: FormBuilder, charService: CharacterService) {
    this.characterSearchForm = fb.group({
      charNameInput: null,
      charServerInput: 'Sargatanas'
    });

    this.characterSearchForm.valueChanges.pipe(
      debounceTime(300),
      tap(() => (this.charResultList.length = 0)),
      filter((query) => query.charNameInput.length > 3),
      tap(() => (this.isLoading = true)),
      switchMap(obj => charService.searchCharacters(obj.charNameInput, obj.charServerInput).pipe(
          finalize(() => this.isLoading = false)
        )
      )
    ).subscribe(characters => this.charResultList = characters);
  }

  ngOnInit() {}
}

