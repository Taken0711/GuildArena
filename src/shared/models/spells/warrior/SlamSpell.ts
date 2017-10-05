import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SlamSpell extends SpellModel {

  constructor() {
    super('Slam', 0, 1);
    this.registerCastableChild(new DamageSpell(1));
  }

}
