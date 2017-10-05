import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {SmiteSpell} from "../spells/priest/SmiteSpell";
import {CorruptSpell} from "../spells/priest/CorruptSpell";
import {PainSpell} from "../spells/priest/PainSpell";

export class PriestClassModel extends CharacterClassModel {

  constructor() {
    super('Priest', CHARACTER_DESCRIPTION.PRIEST, 'Asharae', BASE_STATS.PRIEST);
    this.registerSpell(new SmiteSpell());
    this.registerSpell(new CorruptSpell());
    this.registerSpell(new PainSpell());
  }

}
