import {Castable} from './Castable';
import {CharacterModel} from '../characters/CharacterModel';

export class DamageSpell implements Castable {

  constructor(public readonly ratio: number) { }

  cast(caster: CharacterModel, target: CharacterModel): void {
    target.takeDamages(caster.getStats().attack * this.ratio);
  }

}
