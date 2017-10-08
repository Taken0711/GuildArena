import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SunfireBurstSpell extends SpellModel {

  constructor() {
    super('Sunfire Burst', 8, 3, false);
    this.registerCastableChild(new DamageSpell(8.5));
  }

}
