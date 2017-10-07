import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class JudgementSpell extends SpellModel {

  constructor() {
    super('Judgement', 0, 1, false);
    this.registerCastableChild(new DamageSpell(1));
  }

}
