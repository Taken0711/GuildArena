import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class AvadaKedavraSpell extends SpellModel {

  constructor() {
    super('Avada Kedavra', 8, 3, false, false);
    this.registerCastableChild(new DamageSpell(8.5));
  }

}
