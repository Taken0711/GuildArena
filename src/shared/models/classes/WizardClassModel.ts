import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {FireBlastSpell} from "../spells/wizard/FireBlastSpell";
import {FireBallSpell} from "../spells/wizard/FireBallSpell";
import {SunfireBurstSpell} from "../spells/wizard/SunfireBurstSpell";
import {ArmageddonSpell} from "../spells/wizard/ArmageddonSpell";

export class WizardClassModel extends CharacterClassModel {

  constructor() {
    super('Wizard', CHARACTER_DESCRIPTION.WIZARD, 'Leaena', BASE_STATS.WIZARD);
    this.registerSpell(new FireBlastSpell());
    this.registerSpell(new FireBallSpell());
    this.registerSpell(new ArmageddonSpell());
    this.registerSpell(new SunfireBurstSpell());
  }

}
