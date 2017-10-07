import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SunfireBurstSpell extends SpellModel {

  constructor() {
    super('Sunfire Burst', 5, 3);
    this.registerCastableChild(new DamageSpell(4.2));
  }

}
