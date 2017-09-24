import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class HunterModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Hunter', CHARACTER_DESCRIPTION.HUNTER);

  constructor() {
    super('Anasasiel', HunterModel.CHARACT_CLAZZ, BASE_STATS.HUNTER.HP, BASE_STATS.HUNTER.ATTACK, BASE_STATS.HUNTER.SPEED);
  }

}
