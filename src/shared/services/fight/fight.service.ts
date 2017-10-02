import { Injectable } from '@angular/core';
import {CharacterModel} from '../../models/characters/CharacterModel';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {FightModel} from "../../models/FightModel";
import {PlayerModel} from "../../models/PlayerModel";
import {SpellModel} from "../../models/SpellModel";

@Injectable()
export class FightService {

  public currentAttackingCharacter$ = new ReplaySubject<CharacterModel>(1);
  public currentFightWinner$ = new ReplaySubject<PlayerModel>(1);
  public currentSelectedSpell$ = new ReplaySubject<SpellModel>(1);

  private isFightFinished: boolean;
  private currentFight: FightModel;


  constructor() {
    this.isFightFinished = true;
  }

  public triggerAttack(target: CharacterModel): void {
    this.currentFight.triggerAttack(target);
    this.checkFinished();
    if (this.currentFight.currentAttackingCharacter.turnSpeed === 0) {
      this.playATurn();
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

  private playATurn(): void {
    this.checkFinished();
    this.updateCurrentAttackingCharacter(this.currentFight.playATurn());
  }

  private updateCurrentAttackingCharacter(attackingCharacter: CharacterModel): void {
    this.currentAttackingCharacter$.next(attackingCharacter);
    this.currentSelectedSpell$.next(attackingCharacter.getSpells()[0]);
  }

  private checkFinished(): void {
    const winner = this.currentFight.getWinner();
    if (winner !== undefined && !this.isFightFinished) {
      this.currentFightWinner$.next(winner);
      this.isFightFinished = true;
    }
  }

}
