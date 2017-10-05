import {Castable} from './Castable';
import {CharacterModel} from '../characters/CharacterModel';

export class HealSpell implements Castable {

  constructor(public readonly ratio: number) { }

  cast(caster: CharacterModel, target: CharacterModel): void {
    target.heal(caster.getStats().attack * this.ratio);
  }

}
