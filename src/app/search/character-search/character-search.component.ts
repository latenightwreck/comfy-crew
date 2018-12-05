import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, finalize, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CharacterSearchResult } from '@xivapi/angular-client';

@Component({
  selector: 'comfy-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  isLoading = false;

  characterList$: Observable<CharacterSearchResult>;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.characterList$ = this.route.queryParamMap.pipe(
      map(params => {
        return {
          name: params.get('name'),
          server: params.get('server')
        };
      }),
      switchMap(obj =>
        this.characterService.searchCharacters(obj.name, obj.server).pipe(shareReplay(1))
      )
    );
  }


  ngOnInit() {}
}

