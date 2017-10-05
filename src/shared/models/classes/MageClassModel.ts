import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class MageClassModel extends CharacterClassModel {

  constructor() {
    super('Mage', CHARACTER_DESCRIPTION.MAGE, 'Velvet', BASE_STATS.MAGE);
    this.registerSpell(new SpellModel('Expelliarmus', 1, 0, 1));
    this.registerSpell(new SpellModel('Sectum Sempra', 1.8, 3, 1));
    this.registerSpell(new SpellModel('Avada Kedavra', 4.2, 5, 3));
  }

}
