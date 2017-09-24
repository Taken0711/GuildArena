import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class MageModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Mage', CHARACTER_DESCRIPTION.MAGE);

  constructor() {
    super('Velvet', MageModel.CHARACT_CLAZZ, BASE_STATS.MAGE.HP, BASE_STATS.MAGE.ATTACK, BASE_STATS.MAGE.SPEED);
  }

}
