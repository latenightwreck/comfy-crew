import { Component, OnInit, Output } from '@angular/core';
import { CharacterSearchResultRow, CharacterSearchResult } from '@xivapi/angular-client';
import { switchMap, debounceTime, tap, finalize, map, filter } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/character/character.service';
import { ResourceLoader } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'comfy-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
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

  characterSearchForm: FormGroup;
  isLoading = false;
  characterList: CharacterSearchResultRow[];

  constructor(fb: FormBuilder, characterService: CharacterService) {
    this.characterSearchForm = fb.group({
      charNameInput: null,
      charServerInput: 'Sargatanas'
    });

    this.characterSearchForm.valueChanges.pipe(
      debounceTime(300),
      filter((query) => query.charNameInput.length > 3),
      tap(() => (this.isLoading = true)),
      switchMap(obj =>
        characterService
          .searchCharacters(obj.charNameInput, obj.charServerInput)
          .pipe(
            map(result => {
              return result;
            }),
            finalize(() => (this.isLoading = false))
            )
      )
    ).subscribe(result => {
        this.characterList = result.Results;
    });
  }

  ngOnInit() {}

  onCharacterSearch() {}
}
