import { Character } from './character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'comfy-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  _character: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this._character = this.route.paramMap.pipe(
      map(params => +params.get('id')),
      switchMap(id =>
        this.characterService.getCharacter(id).pipe(
          shareReplay(1)
        )
      )
    );

    this._character.pipe(
      map(character => {
        // make ClassJobs object separated the way i want
        return character.classJobs;
      })
    );
  }

  ngOnInit() {}
}
