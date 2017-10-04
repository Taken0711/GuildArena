import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class WarriorClassModel extends CharacterClassModel {

  constructor() {
    super('Warrior', CHARACTER_DESCRIPTION.WARRIOR, 'Ailfir', BASE_STATS.WARRIOR);
    this.registerSpell(new SpellModel('Slam', 1, 0, 1));
    this.registerSpell(new SpellModel('Charge', 0.6, 3, 0));
    this.registerSpell(new SpellModel('Mortal Strike', 3, 4, 2));
  }

}
