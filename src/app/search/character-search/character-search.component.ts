import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from 'src/app/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, finalize, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CharacterSearchResult } from '@xivapi/angular-client';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'comfy-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  isLoading = false;

  @ViewChild(SearchBarComponent)
  searchBarComponent: SearchBarComponent;

  constructor() {}


  ngOnInit() {}
}

