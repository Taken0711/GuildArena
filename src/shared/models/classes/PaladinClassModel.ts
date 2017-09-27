import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class PaladinClassModel extends CharacterClassModel {

  constructor() {
    super('Paladin', CHARACTER_DESCRIPTION.PALADIN, 'Inhora', BASE_STATS.PALADIN);
  }

}
