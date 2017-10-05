import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class MutilateSpell extends SpellModel {

  constructor() {
    super('Mutilate', 0, 1);
    this.registerCastableChild(new DamageSpell(1));
  }

}
