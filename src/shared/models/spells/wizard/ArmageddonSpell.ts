import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class ArmageddonSpell extends SpellModel {

  constructor() {
    super('Armageddon', 5, 2, false, true);
    this.registerCastableChild(new DamageSpell(2));
  }

}
