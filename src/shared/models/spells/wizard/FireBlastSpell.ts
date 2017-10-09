import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class FireBlastSpell extends SpellModel {

  constructor() {
    super('Fire Blast', 0, 1, false, false);
    this.registerCastableChild(new DamageSpell(1));
  }

}
