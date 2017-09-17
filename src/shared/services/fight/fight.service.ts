import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FightModel} from "../../models/FightModel";

@Injectable()
export class FightService {

  private currentFight$: BehaviorSubject<FightModel>;

  constructor() { }

  updateCurrentFight(nextFight: FightModel) {
    this.currentFight$.next(nextFight);
    console.log(`Combat entre ${nextFight.player1.name} et ${nextFight.player2.name}`);
  }

}
