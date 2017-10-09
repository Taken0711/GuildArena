import {ReplaySubject} from "rxjs/ReplaySubject";
import {CharacterClassModel} from "../classes/CharacterClassModel";
import {SpellModel} from "../spells/SpellModel";
import {EffectModel} from "../spells/EffectModel";
import {PlayerModel} from "../PlayerModel";

export class CharacterModel {

  public static readonly BASE_SPEED = 100;

  public readonly name: string;
  public readonly clazz: CharacterClassModel;

  public spells: SpellModel[] = [];
  public player: PlayerModel;

  public hp: number;
  public turnSpeed: number;
  public charges: number;
  public effects: EffectModel[] = [];
  public death$: ReplaySubject<boolean>;

  private id: number;


  constructor(clazz: CharacterClassModel, player: PlayerModel) {
    this.name = clazz.characterName;
    this.clazz = clazz;

    this.clazz.spells.forEach(spell => this.spells.push(spell.copy()));
    this.player = player;

    this.death$ = new ReplaySubject<boolean>(1);

    this.id = Math.random() * 1e32;
  }

  public getStats() {
    return this.clazz.stats;
  }

  public resetToFight(): void {
    this.hp = this.clazz.stats.hp;
    this.turnSpeed = 0;
    this.charges = 0;
    this.death$.next(false);
  }

  public heal(amount: number): void {
    this.hp = Math.min(this.hp + amount, this.getStats().hp);
  }

  public takeDamages(damages: number): void {
    this.hp -= damages;
    if (this.isDead()) {
      this.turnSpeed = 0;
      this.charges = 0;
      this.effects = [];
      this.death$.next(true);
    }
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }

  public spell(spell: SpellModel, targets: CharacterModel[]): void {
    if (spell === undefined || !this.spells.includes(spell)) {
      console.log('Undefined spell or not in the spell list.');
      this.charges--;
      return this.clazz.stats.attack;
    }
    this.charges -= spell.cost;
    spell.castSpell(this, targets);
  }

  public addEffect(effect: EffectModel) {
    this.effects.push(effect);
  }

  public removeEffect(effect: EffectModel) {
    const index = this.effects.indexOf(effect);
    if (index > -1) {
      this.effects.splice(index, 1);
    }
  }

  public updateOnTurn(): void {
    this.spells.forEach(spell => spell.decreaseCooldown());
    // Tmp variable because for-each break if an effect is removed
    const toApply: EffectModel[] = [];
    this.effects.forEach(e => toApply.push(e));
    toApply.forEach(effect => effect.apply());

    if (this.charges < 3) {
      this.charges++;
    }
  }

}
