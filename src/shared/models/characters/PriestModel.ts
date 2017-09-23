import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class PriestModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Priest', CHARACTER_DESCRIPTION.PRIEST);

  constructor() {
    super('Anduin', PriestModel.CHARACT_CLAZZ, BASE_STATS.PRIEST.HP, BASE_STATS.PRIEST.ATTACK, BASE_STATS.PRIEST.SPEED);
  }

}
