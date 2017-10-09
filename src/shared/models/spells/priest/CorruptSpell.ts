import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class CorruptSpell extends SpellModel {

  constructor() {
    super('Corrupt', 3, 2, false, false);
    this.registerCastableChild(new DamageSpell(3.6));
  }

}
