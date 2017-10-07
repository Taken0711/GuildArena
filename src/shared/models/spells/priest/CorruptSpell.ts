import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class CorruptSpell extends SpellModel {

  constructor() {
    super('Corrupt', 3, 1, false);
    this.registerCastableChild(new DamageSpell(1.8));
  }

}
