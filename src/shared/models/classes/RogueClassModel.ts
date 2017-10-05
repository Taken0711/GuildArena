import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {MutilateSpell} from "../spells/rogue/MutilateSpell";
import {BackstabSpell} from "../spells/rogue/BackstabSpell";
import {EviscerateSpell} from "../spells/rogue/EviscerateSpell";

export class RogueClassModel extends CharacterClassModel {

  constructor() {
    super('Rogue', CHARACTER_DESCRIPTION.ROGUE, 'Red', BASE_STATS.ROGUE);
    this.registerSpell(new MutilateSpell());
    this.registerSpell(new BackstabSpell());
    this.registerSpell(new EviscerateSpell());
  }

}
