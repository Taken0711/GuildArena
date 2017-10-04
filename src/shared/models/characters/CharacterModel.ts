import {ReplaySubject} from "rxjs/ReplaySubject";
import {CharacterClassModel} from "../classes/CharacterClassModel";
import {SpellModel} from "../SpellModel";

export class CharacterModel {

  public static readonly BASE_SPEED = 100;

  public readonly name: string;
  public readonly clazz: CharacterClassModel;

  public spells: SpellModel[] = [];

  public hp: number;
  public turnSpeed: number;
  public charges: number;
  public death$: ReplaySubject<boolean>;

  private id: number;


  constructor(clazz: CharacterClassModel) {
    this.name = clazz.characterName;
    this.clazz = clazz;

    this.clazz.spells.forEach(spell => this.spells.push(spell.copy()));

    this.death$ = new ReplaySubject<boolean>(1);

    this.id = Math.random() * 1e32;
  }

  public resetToFight(): void {
    this.hp = this.clazz.stats.hp;
    this.turnSpeed = 0;
    this.charges = 0;
    this.death$.next(false);
  }

  public takeDamages(damages: number): void {
    this.hp -= damages;
    if (this.isDead()) {
      this.death$.next(true);
    }
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }

  public spell(spell: SpellModel): number {
    if (spell === undefined || !this.spells.includes(spell)) {
      console.log('Undefined spell or not in the spell list.');
      this.charges--;
      return this.clazz.stats.attack;
    }
    this.charges -= spell.cost;
    return spell.castSpell(this.clazz.stats.attack);
  }

  public updateOnTurn(): void {
    this.spells.forEach(spell => spell.decreaseCooldown());
    if (this.charges < 3) {
      // For charge addition (spells) make a delta variable
      this.charges++;
    }

  }

}
