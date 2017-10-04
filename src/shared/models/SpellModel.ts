export class SpellModel {

  public turnCooldown = 0;

  constructor(public readonly name: string, public readonly ratio: number, public readonly cooldown: number) {
  }

  public castSpell(attack: number): number {
    this.turnCooldown = this.cooldown;
    return this.ratio * attack;
  }

  public decreaseCooldown(): void {
    this.turnCooldown--;
  }

  public copy(): SpellModel {
    return new SpellModel(this.name, this.ratio, this.cooldown);
  }

}
