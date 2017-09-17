import {CharacterModel} from './CharacterModel';

export class PlayerModel {

  public name: string;
  public team: CharacterModel[];

  constructor(name: string, team?: CharacterModel[]) {
    this.name = name;
    this.team = team;
    if (team === undefined) {
      this.team = [];
    }
  }

}
