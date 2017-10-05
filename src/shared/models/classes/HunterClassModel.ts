import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class HunterClassModel extends CharacterClassModel {

  constructor() {
    super('Hunter', CHARACTER_DESCRIPTION.HUNTER, 'Anasasiel', BASE_STATS.HUNTER);
    this.registerSpell(new SpellModel('Distant shooting', 1, 0, 1));
    this.registerSpell(new SpellModel('Double shot', 1.8, 3, 1));
    this.registerSpell(new SpellModel('Powerful shooting', 5, 6, 2));
  }

}
