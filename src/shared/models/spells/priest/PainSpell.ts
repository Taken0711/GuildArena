import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class PainSpell extends SpellModel {

  constructor() {
    super('Pain', 7, 3);
    this.registerCastableChild(new DamageSpell(8));
  }

}
