import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class PaladinClassModel extends CharacterClassModel {

  constructor() {
    super('Paladin', CHARACTER_DESCRIPTION.PALADIN, 'Inhora', BASE_STATS.PALADIN);
    this.registerSpell(new SpellModel('Judgment', 1, 0, 1));
    this.registerSpell(new SpellModel('Hammer of Justice', 2.5, 3, 1));
    this.registerSpell(new SpellModel('Divine Storm', 5, 6, 3));
  }

}
