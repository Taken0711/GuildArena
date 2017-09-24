import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class RogueModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Rogue', CHARACTER_DESCRIPTION.ROGUE);

  constructor() {
    super('Red', RogueModel.CHARACT_CLAZZ, BASE_STATS.ROGUE.HP, BASE_STATS.ROGUE.ATTACK, BASE_STATS.ROGUE.SPEED);
  }

}
