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
  public attacking: boolean;
  public targeted = false;

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
        this.attacking = true;
      } else {
        if (this.targeted) {
          this.target();
        } else if (this.attacking) {
          this.changeState(CharacterState.IDLE);
        }
        this.attacking = false;
      }
    });
    // Selected spell
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      this.currentSpellType = spell.getType();
      if (this.isTarget()) {
        this.target();
      }
    });
    // Targeted Character
    this.fightService.currentTargetedCharacter$.subscribe(c => {
      if (c === this.character || (this.fightService.currentSelectedSpell$.getValue().isAoe() && this.character.player.isPartOfTeam(c))) {
        this.targetCallback();
      } else {
        this.untargetCallback();
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
    if (this.isState(CharacterState.DEAD) ||
        (this.fightService.getSelectedSpell().isSelf() && this.fightService.getAttackingCharacter() !== this.character)) {
      return;
    }
    this.fightService.updateCurrentTargetedCharacter(this.character);
  }

  targetCallback(): void {
    this.targeted = true;
    switch (this.currentSpellType) {
      case SpellType.DAMAGE:
        if (this.attacking) {
          return;
        }
        this.changeState(CharacterState.TARGET_DAMAGE);
        break;
      case SpellType.HEAL:
        this.changeState(CharacterState.TARGET_HEAL);
        break;
    }
  }

  untarget(): void {
    this.fightService.updateCurrentTargetedCharacter(undefined);
  }

  untargetCallback(): void {
    this.targeted = false;
    if (this.isTarget()) {
      if (this.attacking) {
        this.changeState(CharacterState.ATTACK);
      } else {
        this.changeState(CharacterState.IDLE);
      }
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
