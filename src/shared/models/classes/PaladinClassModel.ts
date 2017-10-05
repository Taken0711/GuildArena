import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {JudgementSpell} from "../spells/paladin/JudgementSpell";
import {HammerOfJusticeSpell} from "../spells/paladin/HammerOfJusticeSpell";
import {DivineStormSpell} from "../spells/paladin/DivineStormSpell";
import {DivineTouchSpell} from "../spells/paladin/DivineTouchSpell";

export class PaladinClassModel extends CharacterClassModel {

  constructor() {
    super('Paladin', CHARACTER_DESCRIPTION.PALADIN, 'Inhora', BASE_STATS.PALADIN);
    this.registerSpell(new JudgementSpell());
    this.registerSpell(new HammerOfJusticeSpell());
    this.registerSpell(new DivineTouchSpell());
    this.registerSpell(new DivineStormSpell());
  }

}
