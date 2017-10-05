import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class DistantShootingSpell extends SpellModel {

  constructor() {
    super('Distant Shooting', 0, 1);
    this.registerCastableChild(new DamageSpell(1));
  }

}
