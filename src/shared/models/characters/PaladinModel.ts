import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class PaladinModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Paladin', CHARACTER_DESCRIPTION.PALADIN);

  constructor() {
    super('Ballador', PaladinModel.CHARACT_CLAZZ, BASE_STATS.PALADIN.HP, BASE_STATS.PALADIN.ATTACK, BASE_STATS.PALADIN.SPEED);
  }

}
