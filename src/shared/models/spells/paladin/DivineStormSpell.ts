import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DivineStormSpell extends SpellModel {

  constructor() {
    super('Divine Storm', 6, 3);
    this.registerCastableChild(new DamageSpell(5));
  }

}
