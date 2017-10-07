import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DoubleShotSpell extends SpellModel {

  constructor() {
    super('Double Shot', 3, 1, false);
    this.registerCastableChild(new DamageSpell(1.8));
  }

}
