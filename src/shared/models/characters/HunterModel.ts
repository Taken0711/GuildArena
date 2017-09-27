import {CharacterModel} from "./CharacterModel";
import {CharacterClass} from "../../constants/character-class";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class HunterModel extends CharacterModel {

  private static readonly STATS = new CharacterStatsModel(50, 10, 130);

  constructor() {
    super('Anasasiel', CharacterClass.HUNTER, HunterModel.STATS);
  }

}
