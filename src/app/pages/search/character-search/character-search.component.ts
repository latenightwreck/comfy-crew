import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from 'src/app/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, finalize, map, shareReplay, debounceTime, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CharacterSearchResult, CharacterSearchResultRow } from '@xivapi/angular-client';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  public charResultList: CharacterSearchResultRow[] = [];

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
    ).subscribe(characters => this.charResultList = characters.Results);
  }

  ngOnInit() {}
}

