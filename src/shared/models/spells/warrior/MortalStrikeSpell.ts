import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class MortalStrikeSpell extends SpellModel {

  constructor() {
    super('Mortal Strike', 4, 2, false);
    this.registerCastableChild(new DamageSpell(4));
  }

}
