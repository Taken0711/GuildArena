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

  constructor(private fightService: FightService) {
    this.changeState(CharacterState.IDLE);
  }

  ngOnInit(): void {
    // ----- Events -----
    // Death
    this.character.death$.subscribe(isDead => {
      if (isDead) {
        this.changeState(CharacterState.DEAD);
      } else {
        this.changeState(CharacterState.IDLE);
      }
    });
    // Attacking turn
    this.fightService.currentAttackingCharacter$.subscribe(c => {
      if (c === this.character) {
        this.changeState(CharacterState.ATTACK);
      } else if (this.isState(CharacterState.ATTACK)) {
        this.changeState(CharacterState.IDLE);
      }
    });
    // --- End events ---
  }

  public getAttacked(): void {
    if (this.isState(CharacterState.TARGET)) {
      this.fightService.triggerAttack(this.character);
    }
  }


  target(): void {
    if (this.isState(CharacterState.IDLE)) {
      this.changeState(CharacterState.TARGET);
    }
  }

  untarget(): void {
    if (this.isState(CharacterState.TARGET)) {
      this.changeState(CharacterState.IDLE);
    }
  }

  private changeState(stateColor: string): void {
    this.backgroundColor = stateColor;
  }

  private isState(stateColor: string): boolean {
    return this.backgroundColor === stateColor;
  }

}
