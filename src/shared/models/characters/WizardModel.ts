import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class WizardModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Wizard', CHARACTER_DESCRIPTION.WIZARD);

  constructor() {
    super('Voldemort', WizardModel.CHARACT_CLAZZ, BASE_STATS.WIZARD.HP, BASE_STATS.WIZARD.ATTACK, BASE_STATS.WIZARD.SPEED);
  }

}
