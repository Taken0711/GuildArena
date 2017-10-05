import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DoubleShot extends SpellModel {

  constructor() {
    super('Double Shot', 3, 1);
    this.registerCastableChild(new DamageSpell(1.8));
  }

}
