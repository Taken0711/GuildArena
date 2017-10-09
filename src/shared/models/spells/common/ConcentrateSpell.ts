import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';
import {ConcentrateEffect} from "../effects/ConcentrateEffect";

export class ConcentrateSpell extends SpellModel {

  constructor() {
    super('Concentrate', 5, 1, true, false);
    this.registerCastableChild(new ConcentrateEffect());
  }

}
