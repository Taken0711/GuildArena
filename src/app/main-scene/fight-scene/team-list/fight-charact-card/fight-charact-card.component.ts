import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/CharacterModel';
import {FightService} from '../../../../../shared/services/fight/fight.service';
import {CharacterState} from '../../../../../shared/constants/character-state';

@Component({
  selector: 'app-fight-charact-card',
  templateUrl: './fight-charact-card.component.html',
  styleUrls: ['./fight-charact-card.component.css']
})
export class FightCharactCardComponent implements OnInit {

  @Input() character: CharacterModel;
  public backgroundColor: string;
  public state: CharacterState;

  constructor(private fightService: FightService) {
    this.backgroundColor = CharacterState.IDLE.toString();
  }

  ngOnInit() {
    this.fightService.currentPlayingCharacter$.subscribe(c => {
      if (c === this.character) {
        this.state = CharacterState.ATTACK;
        this.backgroundColor = CharacterState.ATTACK.toString();
        console.log(this.character.name);
        console.log(this.backgroundColor);
      } else if (this.backgroundColor === CharacterState.ATTACK.toString()) {
        this.backgroundColor = CharacterState.IDLE.toString();
      }
    });
  }

}
