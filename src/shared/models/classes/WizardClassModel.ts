import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../SpellModel";

export class WizardClassModel extends CharacterClassModel {

  constructor() {
    super('Wizard', CHARACTER_DESCRIPTION.WIZARD, 'Leaena', BASE_STATS.WIZARD);
    this.spells.push(new SpellModel('Fireball', 3));
    this.spells.push(new SpellModel('Yolo', 5));
  }

}
