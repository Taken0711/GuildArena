import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class AvadaKedavraSpell extends SpellModel {

  constructor() {
    super('Avada Kedavra', 5, 3);
    this.registerCastableChild(new DamageSpell(4.2));
  }

}
