import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class MageModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(50, 14, 99);

  constructor() {
    super('Velvet', CharacterClass.MAGE, MageModel.STATS);
  }

}
