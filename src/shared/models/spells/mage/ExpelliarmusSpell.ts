import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class ExpelliarmusSpell extends SpellModel {

  constructor() {
    super('Expelliarmus', 0, 1);
    this.registerCastableChild(new DamageSpell(1));
  }

}
