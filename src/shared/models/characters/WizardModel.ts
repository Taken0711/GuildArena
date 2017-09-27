import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class WizardModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(50, 14, 99);

  constructor() {
    super('Leaena', CharacterClass.WIZARD, WizardModel.STATS);
  }

}
