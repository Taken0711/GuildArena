import {PlayerModel} from './PlayerModel';

export class FightModel {

  public player1: PlayerModel;
  public player2: PlayerModel;

  constructor(player1: PlayerModel, player2: PlayerModel) {
    this.player1 = player1;
    this.player2 = player2;
  }

  disclaimer() {
    return `${this.player1.name} VS ${this.player2.name}`;
  }

}
