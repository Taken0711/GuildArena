import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class WarriorClassModel extends CharacterClassModel {

  constructor() {
    super('Warrior', CHARACTER_DESCRIPTION.WARRIOR, 'Ailfir', BASE_STATS.WARRIOR);
  }

}
