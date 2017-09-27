import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class RogueModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(70, 7, 140);

  constructor() {
    super('Red', CharacterClass.ROGUE, RogueModel.STATS);
  }

}
