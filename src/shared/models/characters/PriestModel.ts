import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class PriestModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(50, 8, 100);

  constructor() {
    super('Asharae', CharacterClass.PRIEST, PriestModel.STATS);
  }

}
