import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class PriestClassModel extends CharacterClassModel {

  constructor() {
    super('Priest', CHARACTER_DESCRIPTION.PRIEST, 'Asharae', BASE_STATS.PRIEST);
    this.registerSpell(new SpellModel('Smite', 1, 0, 1));
    this.registerSpell(new SpellModel('Corrupt', 1.8, 3, 1));
    this.registerSpell(new SpellModel('Pain', 8, 7, 3));
  }

}
