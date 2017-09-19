import {PlayerModel} from './PlayerModel';
import {CharacterModel} from 'shared/models/CharacterModel';
import * as Collections from 'typescript-collections/dist/lib';

export class FightModel {

  public player1: PlayerModel;
  public player2: PlayerModel;

  public speedStep: number;
  public attacking: Collections.PriorityQueue<CharacterModel>;
  public characterList: CharacterModel[];

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

  disclaimer(): string {
    return `${this.player1.name} VS ${this.player2.name}`;
  }

  playATurn(): CharacterModel {
    while (this.attacking.isEmpty()) {
      this.characterList.forEach(c => {
        c.turnSpeed += this.speedStep;
        if (c.turnSpeed >= CharacterModel.BASE_SPEED) {
          this.attacking.enqueue(c);
        }
      });
    }
    return this.attacking.dequeue();
  }

  private addPlayerToFight(player: PlayerModel) {
    player.team.forEach(c => {
      c.resetToFight();
      this.characterList.push(c);
    })
  }
}
