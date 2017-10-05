import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class EviscerateSpell extends SpellModel {

  constructor() {
    super('Eviscerate', 6, 2);
    this.registerCastableChild(new DamageSpell(6));
  }

}
