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

  public hasLost(): boolean  {
    for (const c of this.team) {
      if (!c.isDead()) {
        return false;
      }
    }
    return true;
  }

}
