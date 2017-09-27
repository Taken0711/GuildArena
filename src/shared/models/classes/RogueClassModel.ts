import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class RogueClassModel extends CharacterClassModel {

  constructor() {
    super('Rogue', CHARACTER_DESCRIPTION.ROGUE, 'Red', BASE_STATS.ROGUE);
  }

}
