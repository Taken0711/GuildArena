import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SlamSpell extends SpellModel {

  constructor() {
    super('Slam', 0, 1, false);
    this.registerCastableChild(new DamageSpell(1));
  }

}
