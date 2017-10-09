import {SpellModel} from '../SpellModel';
import {HealSpell} from "../HealSpell";

export class MassBlessSpell extends SpellModel {

  constructor() {
    super('Mass Bless', 2, 3, false, true);
    this.registerCastableChild(new HealSpell(4));
  }

}
