import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class MageClassModel extends CharacterClassModel {

  constructor() {
    super('Mage', CHARACTER_DESCRIPTION.MAGE, 'Velvet', BASE_STATS.MAGE);
  }

}
