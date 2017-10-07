import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class SectumSempraSpell extends SpellModel {

  constructor() {
    super('Sectum Sempra', 3, 1, false);
    this.registerCastableChild(new DamageSpell(1.8));
  }

}
