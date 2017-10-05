import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class BackstabSpell extends SpellModel {

  constructor() {
    super('Backstab', 2, 1);
    this.registerCastableChild(new DamageSpell(2));
  }

}
