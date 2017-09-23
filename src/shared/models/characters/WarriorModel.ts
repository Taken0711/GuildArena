import {CharacterModel} from "./CharacterModel";
import {ClassModel} from "../ClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";

export class WarriorModel extends CharacterModel {

  public static readonly CHARACT_CLAZZ = new ClassModel('Warrior', CHARACTER_DESCRIPTION.WARRIOR);

  constructor() {
    super('Jaime Lannister', WarriorModel.CHARACT_CLAZZ, BASE_STATS.WARRIOR.HP, BASE_STATS.WARRIOR.ATTACK, BASE_STATS.WARRIOR.SPEED);
  }

}
