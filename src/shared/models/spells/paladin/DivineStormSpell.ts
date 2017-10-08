import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DivineStormSpell extends SpellModel {

  constructor() {
    super('Divine Storm', 6, 3, false);
    this.registerCastableChild(new DamageSpell(7));
  }

}
