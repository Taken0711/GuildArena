import {EffectModel} from "../EffectModel";
import {SpellType} from "../../../constants/spell-type";

export class BurnedEffect extends EffectModel {

  constructor(duration: number, probability: number) {
    super('Burned', 0.8, duration, probability);
  }

  public hookApply() {
    this.target.takeDamages(this.caster.getStats().attack * this.ratio);
  }

  public getType(): SpellType {
    return SpellType.DAMAGE;
  }

  public copy(): BurnedEffect {
    return new BurnedEffect(this.duration, this.probability);
  }

}
