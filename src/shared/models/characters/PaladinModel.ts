import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class PaladinModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(90, 8, 100);

  constructor() {
    super('Inhora', CharacterClass.PALADIN, PaladinModel.STATS);
  }

}
