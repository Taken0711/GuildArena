import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class WarriorModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(100, 7, 100);

  constructor() {
    super('Ailfir', CharacterClass.WARRIOR, WarriorModel.STATS);
  }

}
