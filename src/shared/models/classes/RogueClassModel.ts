import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class RogueClassModel extends CharacterClassModel {

  constructor() {
    super('Rogue', CHARACTER_DESCRIPTION.ROGUE, 'Red', BASE_STATS.ROGUE);
    this.registerSpell(new SpellModel('Mutilate', 1, 0, 1));
    this.registerSpell(new SpellModel('Backstab', 2, 2, 1));
    this.registerSpell(new SpellModel('Eviscerate', 6, 6, 2));
  }

}
