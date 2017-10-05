import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class JudgementSpell extends SpellModel {

  constructor() {
    super('Judgement', 0, 1);
    this.registerCastableChild(new DamageSpell(1));
  }

}
