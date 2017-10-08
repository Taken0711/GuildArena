import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class HammerOfJusticeSpell extends SpellModel {

  constructor() {
    super('Hammer of Justice', 3, 2, false);
    this.registerCastableChild(new DamageSpell(3.6));
  }

}
