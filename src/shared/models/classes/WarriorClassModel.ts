import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {SlamSpell} from "../spells/warrior/SlamSpell";
import {ChargeSpell} from "../spells/warrior/ChargeSpell";
import {MortalStrikeSpell} from "../spells/warrior/MortalStrikeSpell";

export class WarriorClassModel extends CharacterClassModel {

  constructor() {
    super('Warrior', CHARACTER_DESCRIPTION.WARRIOR, 'Ailfir', BASE_STATS.WARRIOR);
    this.registerSpell(new SlamSpell());
    this.registerSpell(new ChargeSpell());
    this.registerSpell(new MortalStrikeSpell());
  }

}
