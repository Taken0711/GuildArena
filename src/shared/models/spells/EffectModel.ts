import {Castable} from './Castable';
import {CharacterModel} from '../characters/CharacterModel';

export abstract class EffectModel implements Castable {

  public remainingTurn: number;
  public caster: CharacterModel;
  public target: CharacterModel;

  constructor(public readonly name: string, public readonly ratio: number, public readonly duration: number,
              public readonly probability: number) { }

  public cast(caster: CharacterModel, target: CharacterModel): void {
    if (Math.random() < 1 - this.probability) {
      return;
    }
    const copy = this.copy();
    copy.remainingTurn = this.duration;
    copy.caster = caster;
    copy.target = target;
    target.addEffect(copy);
  }

  public apply(): void {
    this.remainingTurn--;
    this.hookApply();
    if (this.remainingTurn < 1) {
      this.target.removeEffect(this);
    }
  }

  public abstract hookApply(): void;

  public abstract getType();

  public abstract copy(): EffectModel;

}
