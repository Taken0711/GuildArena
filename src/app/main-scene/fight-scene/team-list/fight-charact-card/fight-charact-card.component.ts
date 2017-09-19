import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/CharacterModel';
import {FightService} from "../../../../../shared/services/fight/fight.service";

@Component({
  selector: 'app-fight-charact-card',
  templateUrl: './fight-charact-card.component.html',
  styleUrls: ['./fight-charact-card.component.css']
})
export class FightCharactCardComponent implements OnInit {

  @Input() character: CharacterModel;

  constructor(private fightService: FightService) {
  }

  ngOnInit() {
    this.fightService.currentPlayingCharacter$.subscribe(c => {
      if (c === this.character) {

      }
    })
  }

}
