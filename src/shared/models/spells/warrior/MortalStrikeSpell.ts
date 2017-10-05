import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class MortalStrikeSpell extends SpellModel {

  constructor() {
    super('Mortal Strike', 4, 2);
    this.registerCastableChild(new DamageSpell(3));
  }

}
