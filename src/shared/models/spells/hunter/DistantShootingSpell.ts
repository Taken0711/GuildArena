import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DistantShootingSpell extends SpellModel {

  constructor() {
    super('Distant Shooting', 0, 1, false, false);
    this.registerCastableChild(new DamageSpell(1));
  }

}
