import {ReplaySubject} from "rxjs/ReplaySubject";
import {CharacterClassModel} from "../CharacterClassModel";

export class CharacterModel {

  public static readonly BASE_SPEED = 100;

  public readonly name: string;
  public readonly clazz: CharacterClassModel;

  public hp: number;
  public turnSpeed: number;
  public death$: ReplaySubject<boolean>;

  private id: number;


  constructor(clazz: CharacterClassModel) {
    this.name = clazz.characterName;
    this.clazz = clazz;

    this.death$ = new ReplaySubject<boolean>(1);

    this.id = Math.random() * 1e32;
  }

  public resetToFight(): void {
    this.hp = this.clazz.stats.hp;
    this.turnSpeed = 0;
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

  public basicAttack(): number {
    this.turnSpeed = 0;
    return this.clazz.stats.attack;
  }

}
