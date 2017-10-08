import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';
import {HealSpell} from "../HealSpell";

export class DivineTouchSpell extends SpellModel {

  constructor() {
    super('Divine Touch', 3, 1, false);
    this.registerCastableChild(new HealSpell(5));
  }

}
