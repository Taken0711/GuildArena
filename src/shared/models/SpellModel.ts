export class SpellModel {

  constructor(public name: string, public ratio: number) { }

  computeDamages(attack: number) {
    return this.ratio * attack;
  }

}
