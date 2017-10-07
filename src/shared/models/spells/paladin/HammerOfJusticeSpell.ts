import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class HammerOfJusticeSpell extends SpellModel {

  constructor() {
    super('Hammer of Justice', 3, 1, false);
    this.registerCastableChild(new DamageSpell(2.5));
  }

}
