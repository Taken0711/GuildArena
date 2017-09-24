import {PlayerModel} from './PlayerModel';
import {CharacterModel} from 'shared/models/characters/CharacterModel';
import * as Collections from 'typescript-collections/dist/lib';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";

export class FightModel {

  public player1: PlayerModel;
  public player2: PlayerModel;

  public speedStep: number;
  public attacking: Collections.PriorityQueue<CharacterModel>;
  public characterList: CharacterModel[];
  public currentAttackingCharacter: CharacterModel;


  constructor(player1: PlayerModel, player2: PlayerModel) {
    this.player1 = player1;
    this.player2 = player2;
    this.speedStep = Math.ceil(CharacterModel.BASE_SPEED / (player1.team.length + player2.team.length));
    this.attacking = new Collections.PriorityQueue<CharacterModel>(function(a: CharacterModel, b: CharacterModel) {
      if (a.speed < b.speed) {
        return -1;
      }
      if (a.speed > b.speed) {
        return 1;
      }
      return 0;
    });
    this.characterList = [];
    this.addPlayerToFight(player1);
    this.addPlayerToFight(player2);
  }

  public triggerAttack(target: CharacterModel): void {
    target.takeDamages(this.currentAttackingCharacter.basicAttack());
    if (target.isDead()) {
      target.turnSpeed = 0;
    }
  }

  public disclaimer(): string {
    return `${this.player1.name} VS ${this.player2.name}`;
  }

  public playATurn(): CharacterModel {
    while (this.attacking.isEmpty()) {
      this.characterList.forEach(c => {
        if (c.isDead()) {
          return;
        }
        c.turnSpeed += c.speed / this.characterList.length;
        if (c.turnSpeed >= CharacterModel.BASE_SPEED) {
          this.attacking.enqueue(c);
        }
      });
    }
    this.currentAttackingCharacter = this.attacking.dequeue();
    return this.currentAttackingCharacter;
  }

  /**
   * Return the winning player if the fight is finisehd, undefined otherwise
   * @returns {boolean}
   */
  public getWinner() {
    if (this.player1.hasLost()) {
      return this.player2;
    }
    if (this.player2.hasLost()) {
      return this.player1;
    }
    return undefined;
  }

  private addPlayerToFight(player: PlayerModel) {
    player.team.forEach(c => {
      c.resetToFight();
      this.characterList.push(c);
    })
  }

}
