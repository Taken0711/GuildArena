import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SmiteSpell extends SpellModel {

  constructor() {
    super('Smite', 0, 1, false);
    this.registerCastableChild(new DamageSpell(1));
  }

}
