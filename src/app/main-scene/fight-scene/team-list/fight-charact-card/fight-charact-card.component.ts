import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/characters/CharacterModel';
import {FightService} from '../../../../../shared/services/fight/fight.service';
import {CharacterState} from '../../../../../shared/constants/character-state';
import {SpellType} from "../../../../../shared/constants/spell-type";

@Component({
  selector: 'app-fight-charact-card',
  templateUrl: './fight-charact-card.component.html',
  styleUrls: ['./fight-charact-card.component.css']
})
export class FightCharactCardComponent implements OnInit {

  @Input() character: CharacterModel;
  public backgroundColor: string;
  public currentSpellType: SpellType;

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
    // Selected spell
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      this.currentSpellType = spell.getType();
      if (this.isTarget()) {
        this.target()
      }
    });
    // --- End events ---
  }

  public getAttacked(): void {
    if (this.isTarget()) {
      this.fightService.triggerAttack(this.character);
    }
  }


  target(): void {
    if (this.isState(CharacterState.IDLE) || this.isTarget()) {
      switch (this.currentSpellType) {
        case SpellType.DAMAGE:
          this.changeState(CharacterState.TARGET_DAMAGE);
          break;
        case SpellType.HEAL:
          this.changeState(CharacterState.TARGET_HEAL);
          break;
      }
    }
  }

  untarget(): void {
    if (this.isTarget()) {
      this.changeState(CharacterState.IDLE);
    }
  }

  private changeState(stateColor: string): void {
    this.backgroundColor = stateColor;
  }

  private isState(stateColor: string): boolean {
    return this.backgroundColor === stateColor;
  }

  private isTarget(): boolean {
    return this.isState(CharacterState.TARGET_DAMAGE) || this.isState(CharacterState.TARGET_HEAL);
  }

}
