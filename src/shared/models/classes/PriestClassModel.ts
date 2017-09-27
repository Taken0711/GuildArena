import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class PriestClassModel extends CharacterClassModel {

  constructor() {
    super('Priest', CHARACTER_DESCRIPTION.PRIEST, 'Asharae', BASE_STATS.PRIEST);
  }

}
