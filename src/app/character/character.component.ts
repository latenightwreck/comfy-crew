import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from './character.service';
import { CharacterResponse } from '@xivapi/angular-client';

@Component({
  selector: 'comfy-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: CharacterResponse;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.characterService.getCharacter(+params['id'])
            .subscribe(characterData => this.character = characterData);
        }
      );
  }

}
