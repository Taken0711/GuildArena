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
    this.idle();
  }

  ngOnInit(): void {
    this.fightService.currentPlayingCharacter$.subscribe(c => {
      if (c === this.character) {
        this.attack();
      } else if (this.isAttacking()) {
        this.idle();
      }
    });
  }

  private isTarget(): boolean {
    return this.backgroundColor === CharacterState.TARGET.toString();
  }

  private target(): void {
    if (this.isIdling()) {
      this.changeState(CharacterState.TARGET);
    }
  }

  private untarget(): void {
    if (this.isTarget()) {
      this.idle();
    }
  }

  private isAttacking(): boolean {
    return this.backgroundColor === CharacterState.ATTACK.toString();
  }

  private attack(): void {
    this.backgroundColor = CharacterState.ATTACK.toString();
  }

  private isIdling(): boolean {
    return this.backgroundColor === CharacterState.IDLE.toString();
  }

  private idle(): void {
    this.changeState(CharacterState.IDLE);
  }

  private changeState(state: CharacterState): void {
    this.backgroundColor = state.toString();
  }
}
