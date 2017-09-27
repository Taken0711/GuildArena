import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class HunterClassModel extends CharacterClassModel {

  constructor() {
    super('Hunter', CHARACTER_DESCRIPTION.HUNTER, 'Anasasiel', BASE_STATS.HUNTER);
  }

}
