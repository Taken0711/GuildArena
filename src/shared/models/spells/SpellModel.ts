import {CharacterModel} from '../characters/CharacterModel';
import {Castable} from './Castable';
import {SpellType} from "../../constants/spell-type";

export class SpellModel {

  private castableChilds: Castable[] = [];

  public turnCooldown = 0;

  constructor(public readonly name: string, public readonly cooldown: number,
              public readonly cost: number) {
  }

  public registerCastableChild(castable: Castable) {
    this.castableChilds.push(castable);
  }

  public castSpell(caster: CharacterModel, target: CharacterModel): void {
    this.turnCooldown = this.cooldown;
    for (const castable of this.castableChilds) {
      castable.cast(caster, target);
    }
  }

  public decreaseCooldown(): void {
    this.turnCooldown--;
  }

  public getType(): SpellType {
    return this.castableChilds[0].getType();
  }

  public copy(): SpellModel {
    const res = new SpellModel(this.name, this.cooldown, this.cost);
    res.castableChilds = this.castableChilds;
    return res;
  }

}
