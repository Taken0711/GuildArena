import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class FireBallSpell extends SpellModel {

  constructor() {
    super('Fire Ball', 3, 1);
    this.registerCastableChild(new DamageSpell(1.8));
  }

}
