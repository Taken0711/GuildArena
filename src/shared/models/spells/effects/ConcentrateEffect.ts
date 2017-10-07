import {EffectModel} from "../EffectModel";
import {SpellType} from "../../../constants/spell-type";

export class ConcentrateEffect extends EffectModel {

  constructor() {
    super('Concentrating', 1, 1, 1);
  }

  public hookApply() {
    this.target.charges += 2;
  }

  public getType(): SpellType {
    return SpellType.HEAL;
  }

  public copy(): ConcentrateEffect {
    return new ConcentrateEffect();
  }

}
