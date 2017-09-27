import {ReplaySubject} from "rxjs/ReplaySubject";
import {CharacterClassModel} from "../CharacterClassModel";
import {CharacterStatsModel} from "../CharacterStatsModel";

export class CharacterModel {

  public static readonly BASE_SPEED = 100;

  public hp: number;
  public turnSpeed: number;
  public death$: ReplaySubject<boolean>;

  private id: number;


  constructor(public name: string, public clazz: CharacterClassModel, public stats: CharacterStatsModel) {
    this.death$ = new ReplaySubject<boolean>(1);
    this.id = Math.random() * 1e32;
  }

  public resetToFight(): void {
    this.hp = this.stats.hp;
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
    return this.stats.attack;
  }

}
