import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class WizardClassModel extends CharacterClassModel {

  constructor() {
    super('Wizard', CHARACTER_DESCRIPTION.WIZARD, 'Leaena', BASE_STATS.WIZARD);
    this.registerSpell(new SpellModel('Fire Blast', 1, 0, 1));
    this.registerSpell(new SpellModel('Fire Ball', 1.8, 3, 1));
    this.registerSpell(new SpellModel('Sunfire burst', 4.2, 5, 3))
  }

}
