import { Component, OnInit, Input } from '@angular/core';
import { CharacterListItem } from 'apps/comfy-crew/src/app/shared/models/character-list-item.model';


@Component({
  selector: 'comfy-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  @Input() characterListItem: CharacterListItem;
  ngOnInit() {}
}
