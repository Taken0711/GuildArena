import {Castable} from './Castable';
import {CharacterModel} from '../characters/CharacterModel';
import {SpellType} from "../../constants/spell-type";

export class HealSpell implements Castable {

  constructor(public readonly ratio: number) { }

  public cast(caster: CharacterModel, target: CharacterModel): void {
    target.heal(caster.getStats().attack * this.ratio);
  }

  public getType(): SpellType {
    return SpellType.HEAL;
  }

}
