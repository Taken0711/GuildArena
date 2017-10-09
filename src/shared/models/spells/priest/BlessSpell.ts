import {SpellModel} from '../SpellModel';
import {HealSpell} from "../HealSpell";

export class BlessSpell extends SpellModel {

  constructor() {
    super('Bless', 2, 1, false, false);
    this.registerCastableChild(new HealSpell(7));
  }

}
