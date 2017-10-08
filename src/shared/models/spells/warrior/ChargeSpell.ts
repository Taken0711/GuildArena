import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class ChargeSpell extends SpellModel {

  constructor() {
    super('Charge', 3, 0, false);
    this.registerCastableChild(new DamageSpell(1.4));
  }

}
