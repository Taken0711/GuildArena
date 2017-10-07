import { Injectable } from '@angular/core';
import {CharacterModel} from '../../models/characters/CharacterModel';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {FightModel} from "../../models/FightModel";
import {PlayerModel} from "../../models/PlayerModel";
import {SpellModel} from "../../models/spells/SpellModel";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {isNullOrUndefined} from "util";

@Injectable()
export class FightService {

  public currentAttackingCharacter$ = new ReplaySubject<CharacterModel>(1);
  public currentFightWinner$ = new ReplaySubject<PlayerModel>(1);
  public currentSelectedSpell$ = new BehaviorSubject<SpellModel>(undefined);

  private isFightFinished: boolean;
  private currentFight: FightModel;


  constructor() {
    this.isFightFinished = true;
  }

  public getAttackingCharacter(): CharacterModel {
    return this.currentFight.currentAttackingCharacter;
  }

  public triggerAttack(target: CharacterModel): void {
    this.currentFight.triggerAttack(target, this.currentSelectedSpell$.getValue());
    if (this.getAttackingCharacter().charges === 0) {
      this.playATurn();
    } else {
      this.checkFinished();
      this.updateCurrentSelectedSpell(this.currentFight.currentAttackingCharacter.spells[0]);
    }
  }

  public updateCurrentFight(currentFight: FightModel): void {
    this.currentFight = currentFight;
  }

  public updateCurrentSelectedSpell(spell: SpellModel): void {
    this.currentSelectedSpell$.next(spell);
  }

  public getCurrentFight(): FightModel {
    return this.currentFight;
  }

  public startFight(): void {
    this.isFightFinished = false;
    this.playATurn();
  }

  public playATurn(): void {
    this.checkFinished();
    if (this.getAttackingCharacter() !== undefined) {
      this.getAttackingCharacter().turnSpeed = 0;
    }
    this.updateCurrentAttackingCharacter(this.currentFight.playATurn());
  }

  private updateCurrentAttackingCharacter(attackingCharacter: CharacterModel): void {
    this.currentAttackingCharacter$.next(attackingCharacter);
    this.currentSelectedSpell$.next(attackingCharacter.spells[0]);
  }

  private checkFinished(): void {
    const winner = this.currentFight.getWinner();
    if (winner !== undefined && !this.isFightFinished) {
      this.currentFightWinner$.next(winner);
      this.isFightFinished = true;
    }
  }

}
