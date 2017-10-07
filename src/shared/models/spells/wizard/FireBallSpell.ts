import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';
import {BurnedEffect} from "../effects/BurnedEffect";

export class FireBallSpell extends SpellModel {

  constructor() {
    super('Fire Ball', 3, 1);
    this.registerCastableChild(new DamageSpell(1.8));
    this.registerCastableChild(new BurnedEffect(2, 1));
  }

}
