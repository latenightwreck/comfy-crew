import { Component, OnInit } from '@angular/core';
import { XivapiService, CharacterSearchResultRow } from '@xivapi/angular-client';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'comfy-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  characterSearchForm: FormGroup;
  public _response: CharacterSearchResultRow[] = [];
  isLoading = false;

  constructor(private fb: FormBuilder, private xivapi: XivapiService) {}

  ngOnInit() {
    this.characterSearchForm = this.fb.group({
      characterSearchInput: null
    });

    this.characterSearchForm.get('characterSearchInput').valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(value => this.xivapi.searchCharacter(value, 'sargatanas')
          .pipe(
            finalize(() => this.isLoading = false)
          )
        )
      )
      .subscribe(characters => this._response = characters.Results);
  }
}
