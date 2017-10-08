import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';
import {BurnedEffect} from "../effects/BurnedEffect";

export class FireBallSpell extends SpellModel {

  constructor() {
    super('Fire Ball', 3, 1, false);
    this.registerCastableChild(new DamageSpell(2.5));
    this.registerCastableChild(new BurnedEffect(3, 1));
  }

}
