import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SectumSempraSpell extends SpellModel {

  constructor() {
    super('Sectum Sempra', 3, 1, false, false);
    this.registerCastableChild(new DamageSpell(2.3));
  }

}
