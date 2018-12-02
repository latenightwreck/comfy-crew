import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comfy-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  objectKeys = Object.keys;
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

  constructor() {}

  ngOnInit() {}
}
