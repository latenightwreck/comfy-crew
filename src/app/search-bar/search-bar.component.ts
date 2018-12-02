import { Component, OnInit } from '@angular/core';
import { CharacterSearchResultRow } from '@xivapi/angular-client';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CharacterService } from '../character/character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'comfy-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  characterSearchForm: FormGroup;
  public response: CharacterSearchResultRow[] = [];
  isLoading = false;

  constructor(fb: FormBuilder,
    characterService: CharacterService,
    private router: Router
    ) {

    this.characterSearchForm = fb.group({
      characterSearchInput: null
    });
  }

  ngOnInit() {
  }

  onSelectionChanged(event: Event) {
    this.router.navigate(['character', event]);
  }
}
