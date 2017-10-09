import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class PainSpell extends SpellModel {

  constructor() {
    super('Pain', 7, 3, false, false);
    this.registerCastableChild(new DamageSpell(8));
  }

}
